import { TEXT_CSS, TextCssType } from "../../constants/text-css-type";
import { useAppSelector } from "../../services/store";
import { TMapIngredient } from "../../types/services-types";
import { TModalFeedCardProps } from "../../types/types";
import FeedIngredient from "../feed-ingredient/feed-ingredient";
import Price from "../price/price";
import Span from "../span/span";
import styles from "./modal-feed-card.module.css";

function ModalFeedCard({ ingredientId, count }: TModalFeedCardProps) {
  const { mapIngredients } = useAppSelector((state) => state.burgerIngredients);
  const ingredient = mapIngredients.get(ingredientId) as TMapIngredient;

  return (
    <div className={styles.card}>
      <FeedIngredient ingredient={ingredient} />
      <h3 className={`${TEXT_CSS[TextCssType.TextDefault]}`}>
        {ingredient.name}
      </h3>
      <div className={`${styles["price-block"]}`}>
        <Span type={TextCssType.DigitsDefault}>{count}</Span>
        <Span type={TextCssType.DigitsDefault}>x</Span>
        <Price
          price={ingredient.price}
          classes={`${TEXT_CSS[TextCssType.DigitsDefault]}`}
        />
      </div>
    </div>
  );
}

export default ModalFeedCard;
