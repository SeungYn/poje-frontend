import SpringSVG from '../svgs/back/SpringSVG';
import { A, front } from '../svgs/Test1';
console.log(front);
console.log(typeof A);
export default function PortfolioSkills() {
  console.log(front);
  return (
    <div>
      {front.map((I) => {
        console.log(typeof I);
        return I;
      })}
    </div>
  );
}
