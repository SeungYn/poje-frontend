import { css, CSSObject, SimpleInterpolation } from 'styled-components';

type DeviceType = 'ss' | 's' | 'mmm' | 'mm' | 'm' | 'l' | 'll' | 'lll';

const sizes: Record<DeviceType, number> = {
 'ss' , 's' , 'mmm' , 'mm' , 'm' , 'l' , 'll' , 'lll'
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
