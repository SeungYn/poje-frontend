import { atom } from 'recoil';

const isOpenNoteState = atom<boolean>({
  key: 'isOpenNoteState',
  default: false,
});
