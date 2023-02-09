import { atom, AtomEffect } from 'recoil';
import { KeysType } from '@src/db/localStorage';

const localStorageEffect: <T>(key: KeysType) => AtomEffect<T> =
  (key) =>
  ({ setSelf, onSet }) => {};

export const accessToken = atom<string>({
  key: 'accessToken',
  default: '',
});

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };
