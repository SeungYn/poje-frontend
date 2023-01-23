import { b, cache } from '../../assets/getImage';
import bb from '../../assets/skills/123.svg';
import { ReactNode } from 'react';
console.log(bb);
console.log(cache);

export default function PortfolioSkills() {
  return <div>{Object.keys(cache).map((i) => cache[i])}</div>;
}
