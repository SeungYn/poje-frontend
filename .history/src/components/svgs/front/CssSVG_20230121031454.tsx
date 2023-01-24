import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height='current'
    viewBox='0 0 100 100'
    width='current'
    xmlSpace='preserve'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fill='#1F62AE'
      d='M27.377 28.889 16.001 32 4.625 28.889 2 0h28.002z'
    />
    <path fill='#347DC6' d='M16 2v27.75l9.232-2.742L27.688 2z' />
    <path
      fill='#FFF'
      d='M24.363 6H7.607L8 10h8l-7.75 2.99.369 4.01h10.883l-.344 4-3.158.99-3.139-1.006L12.533 19h-3.73l.459 4.987L16 25.99l6.728-2.004.991-10.996h-7.693L24 10z'
    />
  </svg>
);

export default SvgComponent;
