const a = require.context('./front', false, /.tsx$/);
console.log(a.keys());
console.log(
  a.keys().forEach((i) => {
    console.log(i);
    const b = a(i);
    console.log(b.default);
  })
);
export const t = 3;
