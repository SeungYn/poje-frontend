const cache = {};

function importAll(r: __WebpackModuleApi.RequireContext) {
  console.log(r.keys());
  r.keys().forEach((key) => console.log(1));
}

importAll(require.context('../components/', true, /\.svg$/));

export const frontSvgs = require.context('./skills/front', true, /\.svg$/);
export const b = 0;
