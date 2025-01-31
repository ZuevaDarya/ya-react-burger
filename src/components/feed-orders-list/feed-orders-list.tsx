import { TFeedOrdersListProps } from "../../types/types";
import styles from "./feed-orders-list.module.css";

function FeedOrdersList({ orders }: TFeedOrdersListProps) {
  return (
    <ul className={`${styles.list} text text_type_digits-default`}>
      {orders.map((order, key) => (
        <li key={`${key}${order}`}>{order}</li>
      ))}
    </ul>
  );
}

export default FeedOrdersList;
