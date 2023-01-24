import { b, cache } from '../../assets/getImage';
import bb from '../../assets/skills/123.svg';
console.log(bb);
import { ReactNode } from 'react';
console.log(cache);

export default function PortfolioSkills() {
  return <div>{Object.keys(cache).map((i) => cache[i])}</div>;
}
