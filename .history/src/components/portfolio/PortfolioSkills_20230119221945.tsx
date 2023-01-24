import { b, cache } from '../../assets/getImage';
import { ReactNode } from 'react';
console.log(cache);
console.log(Gest);
export default function PortfolioSkills() {
  return (
    <div>
      <>{Object.keys(cache).map((i: string) => cache[i])}</>
    </div>
  );
}
