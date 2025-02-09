import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation } from "react-router-dom";
import uuid from "react-uuid";
import { TEXT_CSS, TextCssType } from "../../constants/text-css-type";
import useOrderPrice from "../../hooks/use-order-price";
import { TFeedCardProps } from "../../types/types";
import FeedIngredient from "../feed-ingredient/feed-ingredient";
import OrderStatus from "../order-status/order-status";
import Price from "../price/price";
import Span from "../span/span";
import Subtitle from "../subtitle/subtitle";
import cardStyles from "./feed-card.module.css";

function FeedCard({ orderStatus, route, order }: TFeedCardProps) {
  const location = useLocation();
  const { totalPrice, ingredientsInOrder } = useOrderPrice(order);

  return (
    <Link
      to={`${route}/${order.number}`}
      className={cardStyles.link}
      state={{ background: location }}
    >
      <div className={cardStyles.card}>
        <div className={cardStyles["card-info"]}>
          <Span type={TextCssType.DigitsDefault}>#{order.number}</Span>
          <Span type={TextCssType.TextInactive}>
            <FormattedDate date={new Date(order.createdAt)} />
          </Span>
        </div>
        <div>
          <Subtitle type={TextCssType.TextMedium}>{order.name}</Subtitle>
          {orderStatus && <OrderStatus status={orderStatus} />}
        </div>

        <div className={cardStyles.details}>
          <div className={cardStyles.ingredients}>
            {ingredientsInOrder?.map((ingredient, idx) => {
              const length = order.ingredients.length;
              const maxIngredientsCount = 6;

              if (length > maxIngredientsCount) {
                if (idx < maxIngredientsCount - 1) {
                  return (
                    <FeedIngredient key={uuid()} ingredient={ingredient} />
                  );
                } else if (idx === maxIngredientsCount - 1) {
                  return (
                    <FeedIngredient
                      key={uuid()}
                      ingredient={ingredient}
                      count={length - maxIngredientsCount}
                    />
                  );
                } else {
                  return null;
                }
              }

              return <FeedIngredient key={uuid()} ingredient={ingredient} />;
            })}
          </div>
          <Price
            price={totalPrice}
            classes={`${TEXT_CSS[TextCssType.DigitsDefault]}`}
          />
        </div>
      </div>
    </Link>
  );
}

export default FeedCard;
