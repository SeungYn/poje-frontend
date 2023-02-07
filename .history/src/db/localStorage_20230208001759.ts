const keys = {
  TOKEN: 'token',
  TEST: '123',
} as const;

export type KeysType = typeof keys;

interface LocalStorage {
  get<R>(key: keyof KeysType): R | null;
  set<R>(key: keyof KeysType, value: R): void;
  remove(key: keyof KeysType): void;
}

export default class TokenStorage implements LocalStorage {
  get<R>(key: keyof KeysType): R | null {
    const result = localStorage.getItem(keys[key]) as R;
    return result || null;
  }

  set<R>(key: keyof KeysType, value: R) {
    return localStorage.setItem(keys[key], JSON.stringify(value));
  }

  remove(key: keyof KeysType) {
    return localStorage.removeItem(key);
  }
}
