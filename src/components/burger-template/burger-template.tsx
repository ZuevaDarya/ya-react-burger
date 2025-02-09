import { ConstructorElemType } from "../../constants/ingredients-type";
import { TextCssType } from '../../constants/text-css-type';
import { TBurgerTemplateProps } from "../../types/types";
import Text from '../text/text';
import templateStyles from "./burger-template.module.css";

function BurgerTemplate({ text, type, isHover }: TBurgerTemplateProps) {
  return (
    <div
      className={`
      constructor-element ml-8
      ${type === ConstructorElemType.Top && "constructor-element_pos_top"}
      ${type === ConstructorElemType.Bottom && "constructor-element_pos_bottom"}
      ${!type && "constructor-element_pos"}
      ${templateStyles["burger-template"]}
      ${isHover && templateStyles["burger-template_hovered"]}
    `}
    >
      <Text type={TextCssType.TextSmall}>Перетащите сюда {text}</Text>
    </div>
  );
}

export default BurgerTemplate;
