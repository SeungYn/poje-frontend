import { atom } from 'recoil';

export const isModifyModeFromPortfolioIntro = atom<boolean>({
  key: 'isModifyModeFromPortfolioIntro',
  default: false,
});

export const isModifyModeFormPortfolioAboutMe = atom<boolean>({
  key: 'isModifyModeFormPortfolioAboutMe',
  default: false,
});

export const isModifyModeFromSkills = atom<boolean>({
  key: 'isModifyModeFromSkills',
  default: false,
});
