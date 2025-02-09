import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { Navigate, useLocation } from "react-router-dom";
import uuid from "react-uuid";
import { AppRoute } from "../../constants/app-route";
import { STATUS } from "../../constants/order-status";
import { TEXT_CSS, TextCssType } from "../../constants/text-css-type";
import useOrder from "../../hooks/use-order";
import useOrderPrice from "../../hooks/use-order-price";
import FeedOrdersBlock from "../feed-orders-block/feed-orders-block";
import ModalFeedCard from "../modal-feed-card/modal-feed-card";
import OrderStatus from "../order-status/order-status";
import Price from "../price/price";
import Subtitle from "../subtitle/subtitle";
import Text from "../text/text";
import Title from "../title/title";
import styles from "./feed-order-details.module.css";

function FeedOrderDetails() {
  const location = useLocation();
  const { order, isSuccess } = useOrder();
  const { totalPrice, ingredientsCountHashTable } = useOrderPrice(order);

  return (
    <>
      {isSuccess && !order && <Navigate to={AppRoute.Error} replace />}
      {order && totalPrice && ingredientsCountHashTable && (
        <div className={styles.container}>
          <Title
            type={TextCssType.DigitsDefault}
            classes={`${!location.state?.background && styles["order-num"]}`}
          >
            #{order.number}
          </Title>
          <div className={styles.content}>
            <div className={styles.title}>
              <Subtitle type={TextCssType.TextMedium}>{order.name}</Subtitle>
              <OrderStatus status={STATUS.done} />
            </div>
            <div className={styles["orders-block"]}>
              <Subtitle type={TextCssType.TextMedium}>Состав:</Subtitle>
              <FeedOrdersBlock>
                {[...new Set(order.ingredients)].map((id) => (
                  <ModalFeedCard
                    key={uuid()}
                    ingredientId={id}
                    count={ingredientsCountHashTable[id]}
                  />
                ))}
              </FeedOrdersBlock>
            </div>
          </div>
          <div className={styles.footer}>
            <Text type={TextCssType.TextInactive}>
              <FormattedDate date={new Date(order.createdAt)} />
            </Text>
            <Price
              price={totalPrice}
              classes={`${TEXT_CSS[TextCssType.DigitsDefault]}`}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default FeedOrderDetails;
