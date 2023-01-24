const a = require.context('./', false);
console.log(
  a.keys().forEach((i) => {
    console.log(i);
  })
);
export const t = 3;
