import { TFeedOrdersIdListProps } from "../../types/types";
import styles from "./feed-orders-id-list.module.css";

function FeedOrdersIdList({ orders }: TFeedOrdersIdListProps) {
  return (
    <ul className={`${styles.list} text text_type_digits-default`}>
      {orders.map((order, key) => (
        <li key={`${key}${order}`}>{order}</li>
      ))}
    </ul>
  );
}

export default FeedOrdersIdList;
