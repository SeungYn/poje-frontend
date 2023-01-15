import { css, CSSObject, SimpleInterpolation } from 'styled-components';

type DeviceType = 'ss' | 's' | 'mmm' | 'mm' | 'm' | 'l' | 'll' | 'lll';

const sizes: Record<DeviceType, number> = {
  ss: 400,
  s: 500,
  mmm: 700,
  mm: 1000,
  m: 1200,
  l: 1400,
  ll: 1600,
  lll: 1800,
};

const mediaMin = Object.entries(sizes).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ) => css`
      @media (max-width: ${value}px) {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {}) as Record<DeviceType, any>;

export { mediaMin };
