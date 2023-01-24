export const cache: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } =
  {};

function importAll(r: __WebpackModuleApi.RequireContext) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}

importAll(require.context('./skills/front', true, /\.svg$/));

export const frontSvgs = require.context('./skills/front', true, /\.svg$/);
export const b = 0;
console.log(cache);
