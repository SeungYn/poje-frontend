import { atom, AtomEffect } from 'recoil';
import TokenStorage from '@src/db/localStorage';
const tokenStorage = new TokenStorage();

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = tokenStorage.get<string>('TOKEN');
    console.log(123, savedValue);
    if (savedValue !== null) setSelf(savedValue as any);

    onSet((newValue, _, isReset) => {
      isReset
        ? tokenStorage.remove('TOKEN')
        : tokenStorage.set<string>('TOKEN', newValue as string);
    });
  };
console.log(localStorage.getItem('TOKEN'));
console.log(tokenStorage.get<string>('TOKEN'));
export const accessTokenState = atom<string>({
  key: 'accessToken',
  default: '',
  effects: [localStorageEffect<string>('accessToken')],
});
