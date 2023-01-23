import { ReactNode } from 'react';

export const front: React.FC<React.SVGProps<SVGSVGElement>>[] = [];
const a = require.context('./front', false, /.tsx$/);

a.keys().forEach((i) => {
  const b = a(i);
  front.push(b.default);
});

export const A = () => <div>123</div>;
