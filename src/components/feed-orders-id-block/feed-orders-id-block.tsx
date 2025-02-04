import { TFeedOrdersIdBlockProps } from "../../types/types";
import FeedOrdersIdList from "../feed-orders-id-list/feed-orders-id-list";
import styles from "./feed-orders-id-block.module.css";

function FeedOrdersIdBlock({ title, isDone, orders }: TFeedOrdersIdBlockProps) {
  return (
    <div className={styles.container}>
      <h2 className="text text_type_main-medium">{title}</h2>
      <div
        className={`${styles["lists-container"]} ${
          isDone && styles["done-lists"]
        }`}
      >
        <FeedOrdersIdList orders={orders} />
      </div>
    </div>
  );
}

export default FeedOrdersIdBlock;
