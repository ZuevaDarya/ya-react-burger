export enum TextCssType {
  TextDefault = "text-default",
  TextLarge = "text-large",
  TextMedium = "text-medium",
  TextSmall = "text-small",
  TextInactive = "text-inactive",
  DigitsDefault = "dgits-default",
  DigitsMedium = "digits-medium",
  DigitsLarge = "digits-large",
}

export const TEXT_CSS = {
  [TextCssType.TextDefault]: "text text_type_main-default",
  [TextCssType.TextLarge]: "text text_type_main-large",
  [TextCssType.TextMedium]: "text text_type_main-medium",
  [TextCssType.TextSmall]: "text text_type_main-small",
  [TextCssType.TextInactive]: "text text_type_main-default text_color_inactive",
  [TextCssType.DigitsDefault]: "text text_type_digits-default",
  [TextCssType.DigitsMedium]: "text text_type_digits-medium",
  [TextCssType.DigitsLarge]: "text text_type_digits-large",
};
