import { b, cache } from '../../assets/getImage';
import Bb from '../../assets/skills/123.svg';
import { ReactNode } from 'react';
import Test1 from '../svgs/Test1';
const q = '123';
import(`../../assets/skills/${q}.svg`).then((i) => console.log(i));
console.log(cache);

export default function PortfolioSkills() {
  return (
    <div>
      <Test1 />
    </div>
  );
}
