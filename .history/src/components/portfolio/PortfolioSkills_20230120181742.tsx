import SpringSVG from '../svgs/back/SpringSVG';
import { A, front } from '../svgs/Test1';
console.log(front);
console.log(A);
export default function PortfolioSkills() {
  console.log(front);
  return (
    <div>
      <>
        {front.map((I) => {
          return I;
        })}
      </>
      <>
        <A />
      </>
    </div>
  );
}
