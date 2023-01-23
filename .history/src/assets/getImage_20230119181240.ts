export const b = require.context('./skills/front', true, /\.svg$/);
console.log(b('css.svg'));
