import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import priceStyles from "./price.module.css";
import { PricePropsType } from "../../types/types";

function Price({ price, classes }: PricePropsType) {
  return (
    <div className={`pt-1 pb-1 ${priceStyles.price}`}>
      <span className={`text ${classes}`}>{price}</span>
      <CurrencyIcon type="primary" />
    </div>
  );
}

export default Price;
