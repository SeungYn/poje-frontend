import { ReactComponent as Gest } from '../../assets/skills/123.svg';
const a = require.context('src/skills/front', false, /\.svg$/);

console.log(a);
export default function PortfolioSkills() {
  return (
    <div>
      <Gest width={'1rem'} height={'10rem'} />
    </div>
  );
}
