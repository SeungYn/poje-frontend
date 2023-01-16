import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainColor: string;
    mainColorDark: string;
    mainColorThickDark: string;
    mainColorSemiDark: string;
    mainColorLight: string;
    mainColorLightTransparency: string;
    textColor: string;
    darkBgColor: string;
    bgColor: string;
    accentColor: string;
    textAccentColor: string;

    borderColor: string;
    iconSize: string;
    fontMiddleSize: string;
  }
}
