import { Link } from "react-router-dom";
import { TFeedCardProps } from "../../types/types";
import FeedIngredient from "../feed-ingredient/feed-ingredient";
import OrderStatus from "../order-status/order-status";
import Price from "../price/price";
import cardStyles from "./feed-card.module.css";

function FeedCard({ orderStatus }: TFeedCardProps) {
  return (
    <Link to={`/feed/${1}`} className={cardStyles.link}>
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
        {orderStatus && <OrderStatus status={orderStatus} />}
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
    </Link>
  );
}

export default FeedCard;
