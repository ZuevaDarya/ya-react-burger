import { ConstructorElemType } from "../../constants/ingredients-type";
import { BurgerTemplatePropsType } from "../../types/types";
import templateStyles from "./burger-template.module.css";

function BurgerTemplate({ text, type }: BurgerTemplatePropsType) {
  return (
    <div
      className={`
      constructor-element 
      ${type === ConstructorElemType.Top && "constructor-element_pos_top"}
      ${type === ConstructorElemType.Bottom && "constructor-element_pos_bottom"}
      ${!type && "constructor-element_pos"}
      ${templateStyles["burger-template"]}
      ml-8
    `}
    >
      <p>Перетащите сюда {text}</p>
    </div>
  );
}

export default BurgerTemplate;
