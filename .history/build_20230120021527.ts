// in ./build.js
const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/build.js');
const config = defaults.__get__('config');
console.log(1231233123);
config.module.rules[1].oneOf[2] = {
  test: /\.svg$/,
  use: [
    {
      loader: require.resolve('@svgr/webpack'),
      options: {
        psrettier: false,
        svgo: false,
        svgoConfig: {
          plugins: [{ removeViewBox: false }],
          titleProp: true,
          ref: true,
        },
      },
    },
    {
      loader: require.resolve('file-loader'),
      options: {
        name: 'static/media/[name].[hash].[ext]',
      },
    },
  ],
};
/**
 * Do not mangle component names in production, for a better learning experience
 * @link https://kentcdodds.com/blog/profile-a-react-app-for-performance#disable-function-name-mangling
 */
config.optimization.minimizer[0].options.terserOptions.keep_classnames = true;
config.optimization.minimizer[0].options.terserOptions.keep_fnames = true;
