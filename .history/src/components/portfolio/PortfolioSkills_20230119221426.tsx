import { ReactComponent as Gest } from '../../assets/skills/123.svg';

import { b, cache } from '../../assets/getImage';
console.log(cache);
console.log(Gest);
export default function PortfolioSkills() {
  return (
    <div>
      <Gest width={'1rem'} height={'10rem'} />
      {Object()
        .keys(cache)
        .map((i: string) => cache[i])}
    </div>
  );
}
