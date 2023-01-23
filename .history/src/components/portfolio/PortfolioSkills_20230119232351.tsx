import { b, cache } from '../../assets/getImage';
import Bb from '../../assets/skills/123.svg';
import { ReactNode } from 'react';
import('../../assets/skills/123.svg').then((i) => console.log(i));
console.log(cache);

async function test() {
  const www = await import('../../assets/skills/123.svg');
  console.log(www);
}

export default function PortfolioSkills() {
  test();
  return <div></div>;
}
