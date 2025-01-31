import { TFeedOrdersBlockProps } from "../../types/types";
import FeedOrdersList from '../feed-orders-list/feed-orders-list';
import styles from "./feed-orders-block.module.css";

function FeedOrdersBlock({ title, isDone, orders }: TFeedOrdersBlockProps) {
  return (
    <div className={styles.container}>
      <h2 className="text text_type_main-medium">{title}</h2>
      <div className={`${styles["lists-container"]} ${isDone && styles["done-lists"]}`}>
        <FeedOrdersList orders={orders}/>
      </div>
    </div>
  );
}

export default FeedOrdersBlock;
