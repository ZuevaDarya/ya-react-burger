import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import "./ingredient-card-price.css";
import { IngredientCardPricePropsType } from "../../types/types";

function IngredientCardPrice({ price }: IngredientCardPricePropsType) {
  return (
    <div className="pt-1 pb-1 ingredient-card-price">
      <span className="text text_type_digits-default">{price}</span>
      <CurrencyIcon type="primary" />
    </div>
  );
}

export default IngredientCardPrice;
