import { TEXT_CSS, TextCssType } from "../../constants/text-css-type";

const getStylesByType = (type: TextCssType) => {
  switch (type) {
    case TextCssType.TextDefault:
      return TEXT_CSS[TextCssType.TextDefault];
    case TextCssType.TextLarge:
      return TEXT_CSS[TextCssType.TextLarge];
    case TextCssType.TextSmall:
      return TEXT_CSS[TextCssType.TextSmall];
    case TextCssType.TextMedium:
      return TEXT_CSS[TextCssType.TextMedium];
    case TextCssType.TextInactive:
      return TEXT_CSS[TextCssType.TextInactive];
    case TextCssType.DigitsDefault:
      return TEXT_CSS[TextCssType.DigitsDefault];
    case TextCssType.DigitsLarge:
      return TEXT_CSS[TextCssType.DigitsLarge];
    case TextCssType.DigitsMedium:
      return TEXT_CSS[TextCssType.DigitsMedium];
    default:
      return TEXT_CSS[TextCssType.TextDefault];
  }
};

export default getStylesByType;
