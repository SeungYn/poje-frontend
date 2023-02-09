const keys = {
  TOKEN: 'token',
  TEST: '123',
} as const;

type KeysType = typeof keys;

export default class LocalStorage {
  get<k extends keyof KeysType>(key: k) {
    return localStorage.getItem(keys[key]);
  }

  set<k extends keyof KeysType>(key: k, value: string) {
    return localStorage.setItem(key, value);
  }

  remove<k extends keyof KeysType>(key: k) {
    return localStorage.removeItem(key);
  }
}
