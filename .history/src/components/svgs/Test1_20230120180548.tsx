import { ReactNode } from 'react';

export const front: ReactNode[] = [];
const a = require.context('./front', false, /.tsx$/);
console.log(a.keys());
console.log(
  a.keys().forEach((i) => {
    console.log(i);
    const b = a(i);
    console.log(b.default);
    front.push(b.default);
  })
);

export const t = <div>123</div>;
