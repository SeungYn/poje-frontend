import SpringSVG from '../svgs/back/SpringSVG';
import { t, front } from '../svgs/Test1';
console.log(front);
export default function PortfolioSkills() {
  return <div>{front.map((I) => I)}</div>;
}
