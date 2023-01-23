const a = require.context('./front', true);
console.log(
  a.keys().forEach((i) => {
    console.log(i);
    a(i);
  })
);
export const t = 3;
