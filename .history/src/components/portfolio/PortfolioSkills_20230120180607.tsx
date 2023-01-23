import SpringSVG from '../svgs/back/SpringSVG';
import { t, front } from '../svgs/Test1';
console.log(front);
console.log(typeof t);
export default function PortfolioSkills() {
  console.log(front);
  return <div>{front.map((I) => I)}</div>;
}
