const a = require.context('./front', false);
console.log(a.keys());
console.log(
  a.keys().forEach((i) => {
    console.log(i);
    const b = a(i);
    console.log(b);
  })
);
export const t = 3;
