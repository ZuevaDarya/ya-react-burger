import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import cardStyles from "./ingredient-card.module.css";
import Price from "../price/price";
import { TIngredientCardProps, TIngredient } from "../../types/types";
import { useAppDispatch } from "../../services/store";
import { addCurrentIngredient } from "../../services/slices/ingredient-details-slice";
import { useDrag } from "react-dnd";
import { memo } from "react";
import { Link, useLocation } from "react-router-dom";

function IngredientCard({ ingredient, count }: TIngredientCardProps) {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const [, dragRef] = useDrag<TIngredient>({
    type: "ingredient",
    item: { ...ingredient },
  });

  const hadleClick = () => {
    dispatch(addCurrentIngredient(ingredient));
  };

  return (
    <Link
      to={`/ingredients/${ingredient._id}`}
      className={`pl-4 pr-4 ${cardStyles["ingredient-card"]}`}
      onClick={hadleClick}
      state={{ background: location }}
      ref={dragRef}
      draggable
    >
      <img src={ingredient.image} alt={ingredient.name} />
      <Price price={ingredient.price} classes="text_type_digits-default" />
      <p className={`text text_type_main-small ${cardStyles["ingredient-card-title"]}`}>
        {ingredient.name}
      </p>
      {count !== 0 && <Counter count={count} size="default" extraClass="m-1" />}
    </Link>
  );
}

export default memo(IngredientCard);
