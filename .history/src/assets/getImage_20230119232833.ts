export const cache: { [key: string]: any } = {};

function importAll(r: __WebpackModuleApi.RequireContext) {
  r.keys().forEach(async (key) => {
    console.log(`./skills/front/${key.replace('./', '')}`);
    //const a = await import(`./skills/front/${key.replace('./', '')}`);
    const t = 'css.svg';
    const a = await import(`./skills/front/${t}`);
    console.log('test', a);
    return (cache[key] = await import(
      `./skills/front/${key.replace('./', '')}`
    ));
  });
}

importAll(require.context('./skills/front', true, /\.svg$/));

export const frontSvgs = require.context('./skills/front', true, /\.svg$/);
export const b = 0;
console.log(cache);
