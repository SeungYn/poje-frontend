import { b, cache } from '../../assets/getImage';
import { ReactNode } from 'react';
console.log(cache);

export default function PortfolioSkills() {
  return (
    <div>
      <>{Object.keys(cache).map((i: string) => cache[i])}</>
    </div>
  );
}
