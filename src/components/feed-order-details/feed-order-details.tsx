import { useLocation } from "react-router-dom";
import { Status } from "../../constants/order-status";
import FeedOrdersBlock from "../feed-orders-block/feed-orders-block";
import ModalFeedCard from "../modal-feed-card/modal-feed-card";
import OrderStatus from "../order-status/order-status";
import Price from "../price/price";
import styles from "./feed-order-details.module.css";

function FeedOrderDetails() {
  const location = useLocation();
  return (
    <div className={styles.container}>
      <h1
        className={`${
          !location.state?.background && styles["order-num"]
        } text text_type_digits-default`}
      >
        #034533
      </h1>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2 className="text text_type_main-medium">
            Black Hole Singularity острый бургер
          </h2>
          <OrderStatus status={Status.Done} />
        </div>
        <div className={styles["orders-block"]}>
          <h2 className="text text_type_main-medium">Состав:</h2>
          <FeedOrdersBlock>
            <ModalFeedCard />
            <ModalFeedCard />
            <ModalFeedCard />
            <ModalFeedCard />
          </FeedOrdersBlock>
        </div>
      </div>
      <div className={styles.footer}>
        <p className="text text_type_main-default text_color_inactive">
          Вчера, 13:50
        </p>
        <Price price={510} classes="text_type_digits-default" />
      </div>
    </div>
  );
}

export default FeedOrderDetails;
