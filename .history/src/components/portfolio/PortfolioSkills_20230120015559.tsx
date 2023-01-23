import { b, cache } from '../../assets/getImage';
import Bb from '../../assets/skills/123.svg';
import { ReactNode } from 'react';
const q = '123';
import(`../../assets/skills/${q}.svg`).then((i) => console.log(i));
console.log(cache);

async function test() {
  const www = await import(`../../assets/skills/${q}.svg`);
  console.log(www);
}

export default function PortfolioSkills() {
  test();
  return <div></div>;
}
