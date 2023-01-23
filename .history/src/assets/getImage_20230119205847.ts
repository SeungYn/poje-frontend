export const b = require.context('./skills/front', true, /\.svg$/);
console.log(Object.values(b));
