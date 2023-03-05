import { atom } from 'recoil';

export const isOpenNoteState = atom<boolean>({
  key: 'isOpenNoteState',
  default: false,
});
