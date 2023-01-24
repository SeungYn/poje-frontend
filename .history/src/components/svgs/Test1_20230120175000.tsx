const a = require.context('./', true);
console.log(a.keys().forEach((i) => a(i)));
export const t = 3;
