const a = require.context('./front/', false);
console.log(a.keys().forEach((i) => a(i)));
export const t = 3;
