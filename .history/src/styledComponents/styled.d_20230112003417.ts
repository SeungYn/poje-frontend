import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainColor: string;
    mainColorSemiDark: string;
    textColor: string;
    darkBgColor: string;
    bgColor: string;
    accentColor: string;
    textAccentColor: string;

    borderColor: string;
  }
}
