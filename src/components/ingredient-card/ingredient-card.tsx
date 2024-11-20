import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import cardStyles from "./ingredient-card.module.css";
import Price from "../price/price";
import { IngredientCardPropsType } from "../../types/types";

function IngredientCard({ ingredient }: IngredientCardPropsType) {
  return (
    <div className={`pl-4 pr-4 ${cardStyles["ingredient-card"]}`}>
      <img src={ingredient.src} alt={ingredient.title} />
      <Price price={ingredient.price} classes="text_type_digits-default" />
      <p className={`text text_type_main-small ${cardStyles["ingredient-card-title"]}`}>
        {ingredient.title}
      </p>
      {ingredient.count && (
        <Counter count={ingredient.count} size="default" extraClass="m-1" />
      )}
    </div>
  );
}

export default IngredientCard;
