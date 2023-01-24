import { b, cache } from '../../assets/getImage';
import Bb from '../../assets/skills/123.svg';
import { ReactNode } from 'react';
const q = '123';
import(`../../assets/skills/${q}.svg`).then((i) => console.log(i));
console.log(cache);

export default function PortfolioSkills() {
  return <div></div>;
}
