import { css, CSSObject, SimpleInterpolation } from 'styled-components';

type DeviceType = 'ss' | 's' | 'mmm' | 'mm' | 'm' | 'l' | 'll' | 'lll';

const sizes: Record<DeviceType, number> = {
  ss: 1,
  s: 1,
  mmm: 1,
  mm: 1,
  m: 1,
  l: 1,
  ll: 1,
  lll: 1,
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

export { media };
