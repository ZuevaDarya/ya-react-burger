import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { memo } from "react";
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";
import { TEXT_CSS, TextCssType } from "../../constants/text-css-type";
import { addCurrentIngredient } from "../../services/slices/ingredient-details-slice";
import { useAppDispatch } from "../../services/store";
import { TIngredient, TIngredientCardProps } from "../../types/types";
import Price from "../price/price";
import Text from '../text/text';
import cardStyles from "./ingredient-card.module.css";

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
      <Price price={ingredient.price} classes={`${TEXT_CSS[TextCssType.DigitsDefault]}`} />
      <Text type={TextCssType.TextSmall} classes={`${cardStyles["ingredient-card-title"]}`}>
        {ingredient.name}
      </Text>
      {count !== 0 && <Counter count={count} size="default" extraClass="m-1" />}
    </Link>
  );
}

export default memo(IngredientCard);
