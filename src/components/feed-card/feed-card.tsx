import FeedIngredient from "../feed-ingredient/feed-ingredient";
import Price from "../price/price";
import cardStyles from "./feed-card.module.css";

function FeedCard() {
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles["card-info"]}>
        <span className="text text_type_digits-default">#034535</span>
        <span className="text text_type_main-default text_color_inactive">
          Сегодня, 16:20
        </span>
      </div>
      <h2 className="text text_type_main-medium">
        Death Star Starship Main бургер
      </h2>
      <div className={cardStyles.details}>
        <div className={cardStyles.ingredients}>
          <FeedIngredient />
          <FeedIngredient />
          <FeedIngredient />
          <FeedIngredient />
          <FeedIngredient />
          <FeedIngredient />
        </div>
        <Price price={480} classes="text_type_digits-default" />
      </div>
    </div>
  );
}

export default FeedCard;
