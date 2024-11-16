import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import "./ingredient-card.css";
import IngredientCardPrice from "../ingredient-card-price/ingredient-card-price";
import { IngredientCardPropsType } from '../../types/types';

function IngredientCard({ingredient}: IngredientCardPropsType) {
  return (
    <div className="pl-4 pr-4 ingredient-card">
      <img src={ingredient.src} alt={ingredient.title} />
      <IngredientCardPrice price={ingredient.price} />
      <p className="text text_type_main-small ingredient-card-title">
        {ingredient.title}
      </p>
      {ingredient.count && <Counter count={ingredient.count} size="default" extraClass="m-1" />}
    </div>
  );
}

export default IngredientCard;
