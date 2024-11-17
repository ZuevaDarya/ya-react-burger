import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import "./price.css";
import { PricePropsType } from "../../types/types";

function Price({ price, classes }: PricePropsType) {
  return (
    <div className="pt-1 pb-1 price">
      <span className={`text ${classes}`}>{price}</span>
      <CurrencyIcon type="primary" />
    </div>
  );
}

export default Price;
