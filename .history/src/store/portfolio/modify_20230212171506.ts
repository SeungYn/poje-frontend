import { atom } from 'recoil';

export const isModifyModeFromPortfolioIntro = atom<boolean>({
  key: 'isModifyModeFromPortfolioIntro',
  default: false,
});

export const isModifyModeFormPortfolioAboutMe = atom<boolean>({
  key: 'isModifyModeFormPortfolioAboutMe',
  default: false,
});
