declare module '*.svg' {
  import React = require('react');
  const value: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
  export default value;
}
