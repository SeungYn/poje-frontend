const cache = {};

function importAll(r: __WebpackModuleApi.RequireContext) {
  console.log(1233);
  console.log(r.keys());
  r.keys().forEach((key) => console.log(1));
}

importAll(require.context('../components/', true, /\.js$/));

export const frontSvgs = require.context('./skills/front', true, /\.svg$/);
export const b = 0;
