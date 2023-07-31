import { css, CSSObject, SimpleInterpolation } from 'styled-components';

type DeviceType = 'ss' | 's' | 'mmm' | 'mm' | 'm' | 'l' | 'll' | 'lll';

export const Sizes: Record<DeviceType, number> = {
  ss: 400,
  s: 500,
  mmm: 700,
  mm: 1000,
  m: 1200,
  l: 1400,
  ll: 1600,
  lll: 1800,
};

const mediaMin = Object.entries(Sizes).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ) => css`
      @media (min-width: ${value}px) {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {}) as Record<DeviceType, any>;

export { mediaMin };

export const breakPoint = {
  ss: '400px',
  s: '500px',
  mmm: '700px',
  mm: '1000px',
  m: '1200px',
  l: '1400px',
  ll: '1600px',
  lll: '1800px',
} as const;
