export interface ITheme {
  colors: {
    theme: string,
    theme2: string,
    success: string,
    error: string,
    background: string,

    placeholder: string,
    disabled: string,
    disabledText: string,
    disabledBorder: string,
    transparent: string,

    text: string,
    textSecondary: string,
    textBlue: string,
    sheetText: string,

    [key: string]: string,
  };
  textStyles: any;
  helpers: any;
  [key: string]: any;
}
