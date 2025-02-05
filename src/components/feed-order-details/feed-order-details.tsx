import { useLocation } from "react-router-dom";
import { Status } from "../../constants/order-status";
import { TEXT_CSS, TextCssType } from "../../constants/text-css-type";
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
  return (
    <div className={styles.container}>
      <Title
        type={TextCssType.DigitsDefault}
        classes={`${!location.state?.background && styles["order-num"]}`}
      >
        #034533
      </Title>
      <div className={styles.content}>
        <div className={styles.title}>
          <Subtitle type={TextCssType.TextMedium}>
            Black Hole Singularity острый бургер
          </Subtitle>
          <OrderStatus status={Status.Done} />
        </div>
        <div className={styles["orders-block"]}>
          <Subtitle type={TextCssType.TextMedium}>Состав:</Subtitle>
          <FeedOrdersBlock>
            <ModalFeedCard />
            <ModalFeedCard />
            <ModalFeedCard />
            <ModalFeedCard />
          </FeedOrdersBlock>
        </div>
      </div>
      <div className={styles.footer}>
        <Text type={TextCssType.TextInactive}>Вчера, 13:50</Text>
        <Price price={510} classes={`${TEXT_CSS[TextCssType.DigitsDefault]}`} />
      </div>
    </div>
  );
}

export default FeedOrderDetails;
