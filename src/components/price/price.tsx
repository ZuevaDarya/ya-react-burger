import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import priceStyles from "./price.module.css";
import { TPriceProps } from "../../types/types";

function Price({ price, classes }: TPriceProps) {
  return (
    <div className={`pt-1 pb-1 ${priceStyles.price}`}>
      <span className={`${classes}`}>{price}</span>
      <CurrencyIcon type="primary" />
    </div>
  );
}

export default Price;
