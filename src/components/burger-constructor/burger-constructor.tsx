import {
  INGREDIENTS_IN_CONSTRUCTOR,
  INGREDIENTS_IN_CONSTRUCTOR_BUTTOM,
  INGREDIENTS_IN_CONSTRUCTOR_TOP,
} from "../../constants/ingredients-info";
import BurgerConstructorItem from "../burger-constructor-item/burger-constructor-item";
import Price from "../price/price";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorStyles from "./burger-constructor.module.css";

function BurgerConstructor() {
  return (
    <div
      className={`pt-25 pl-4 ${burgerConstructorStyles["burger-constructor"]}`}
    >
      <div className={`${burgerConstructorStyles["burger-constructor-list"]}`}>
        <BurgerConstructorItem ingredient={INGREDIENTS_IN_CONSTRUCTOR_TOP} />
        <div
          className={`${burgerConstructorStyles["burger-constructor-list"]}`}
        >
          {INGREDIENTS_IN_CONSTRUCTOR.map((ingredient, idx) => (
            <BurgerConstructorItem key={idx} ingredient={ingredient} />
          ))}
        </div>
        <BurgerConstructorItem ingredient={INGREDIENTS_IN_CONSTRUCTOR_BUTTOM} />
      </div>
      <div className={burgerConstructorStyles["constructor-price-container"]}>
        <Price price={610} classes="text_type_digits-medium" />
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}

export default BurgerConstructor;
