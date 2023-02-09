import { atom, AtomEffect } from 'recoil';
import TokenStorage from '@src/db/localStorage';
const tokenStorage = new TokenStorage();

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = tokenStorage.get<string>('TOKEN');
    if (savedValue !== null) setSelf(savedValue as any);

    onSet((newValue, _, isReset) => {
      isReset
        ? tokenStorage.remove('TOKEN')
        : tokenStorage.set<string>('TOKEN', newValue as string);
    });
  };

export const accessToken = atom<string>({
  key: 'accessToken',
  default: '',
  effects: [localStorageEffect<string>('accessToken')],
});
