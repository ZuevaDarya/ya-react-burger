import { Link, useLocation } from "react-router-dom";
import { TEXT_CSS, TextCssType } from "../../constants/text-css-type";
import { TFeedCardProps } from "../../types/types";
import FeedIngredient from "../feed-ingredient/feed-ingredient";
import OrderStatus from "../order-status/order-status";
import Price from "../price/price";
import Span from "../span/Span";
import Subtitle from "../subtitle/subtitle";
import cardStyles from "./feed-card.module.css";

function FeedCard({ orderStatus, route }: TFeedCardProps) {
  const location = useLocation();

  return (
    <Link
      to={`${route}/${1}`}
      className={cardStyles.link}
      state={{ background: location }}
    >
      <div className={cardStyles.card}>
        <div className={cardStyles["card-info"]}>
          <Span type={TextCssType.DigitsDefault}>#034535</Span>
          <Span type={TextCssType.TextInactive}>Сегодня, 16:20</Span>
        </div>
        <div>
          <Subtitle type={TextCssType.TextMedium}>
            Death Star Starship Main бургер
          </Subtitle>
          {orderStatus && <OrderStatus status={orderStatus} />}
        </div>

        <div className={cardStyles.details}>
          <div className={cardStyles.ingredients}>
            <FeedIngredient />
            <FeedIngredient />
            <FeedIngredient />
            <FeedIngredient />
            <FeedIngredient />
            <FeedIngredient />
          </div>
          <Price price={480} classes={`${TEXT_CSS[TextCssType.DigitsDefault]}`} />
        </div>
      </div>
    </Link>
  );
}

export default FeedCard;
