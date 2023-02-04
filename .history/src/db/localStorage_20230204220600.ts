const keys = {
  TOKEN: 'token',
  TEST: '123',
} as const;

type KeysType = typeof keys;

export default class LocalStorage {
  get<K extends keyof KeysType, R>(key: K): R | null {
    const result = localStorage.getItem(keys[key]);
    return result ? JSON.parse(result) : null;
  }

  set<K extends keyof KeysType, R>(key: K, value: R) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  remove<K extends keyof KeysType>(key: K) {
    return localStorage.removeItem(key);
  }
}
