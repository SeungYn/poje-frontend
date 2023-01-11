import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string;
    darkBgColor: string;
    bgColor: string;
    accentColor: string;
    textAccentColor: string;

    borderColor: string;
  }
}
