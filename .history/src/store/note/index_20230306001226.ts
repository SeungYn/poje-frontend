import { atom } from 'recoil';

export const isOpenNoteState = atom<boolean>({
  key: 'isOpenNoteState',
  default: false,
});

export const isOpenSendNoteModal = atom<boolean>({
  key: 'isOpenSendNoteModal',
  default: false,
});
