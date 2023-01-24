const a = require.context('./', true);
console.log(
  a.keys().forEach((i) => {
    console.log(i);
  })
);
export const t = 3;
