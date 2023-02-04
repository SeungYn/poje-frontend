const keys = {
  TOKEN: 'token',
  TEST: '123',
} as const;

type KeysType = typeof keys;

export default class LocalStorage {
  get<R>(key: keyof KeysType): R | null {
    const result = localStorage.getItem(keys[key]);
    return result;
  }

  set<R>(key: keyof KeysType, value: R) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: keyof KeysType) {
    return localStorage.removeItem(key);
  }
}
