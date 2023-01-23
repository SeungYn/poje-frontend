const a = require.context('./front/', false);
console.log(
  a.keys().forEach((i) => {
    console.log(i);
  })
);
export const t = 3;
