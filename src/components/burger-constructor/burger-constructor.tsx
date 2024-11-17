import {
  INGREDIENTS_IN_CONSTRUCTOR,
  INGREDIENTS_IN_CONSTRUCTOR_BUTTOM,
  INGREDIENTS_IN_CONSTRUCTOR_TOP,
} from "../../constants/ingredients-info";
import "./burger-constructor.css";
import BurgerConstructorItem from "../burger-constructor-item/burger-constructor-item";
import Price from "../price/price";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor() {
  return (
    <div className="pt-25 pl-4" style={{ display: "grid" }}>
      <ul className="burger-constructor-list">
        <BurgerConstructorItem ingredient={INGREDIENTS_IN_CONSTRUCTOR_TOP} />
        <ul className="burger-constructor-list pr-2">
          {INGREDIENTS_IN_CONSTRUCTOR.map((ingredient, idx) => (
            <BurgerConstructorItem key={idx} ingredient={ingredient} />
          ))}
        </ul>
        <BurgerConstructorItem ingredient={INGREDIENTS_IN_CONSTRUCTOR_BUTTOM} />
      </ul>
      <div className="constructor-price-container">
        <Price price="610" classes="text_type_digits-medium" />
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}

export default BurgerConstructor;
