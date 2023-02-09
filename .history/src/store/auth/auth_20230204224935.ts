import { atom, AtomEffect } from 'recoil';
import TokenStorage, { KeysType } from '@src/db/localStorage';
const tokenStorage = new TokenStorage();

const localStorageEffect: <T>(key: keyof KeysType) => AtomEffect<T> =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = tokenStorage.get<string>('TOKEN');
    if (savedValue !== null) setSelf(savedValue);
  };

export const accessToken = atom<string>({
  key: 'accessToken',
  default: '',
});
