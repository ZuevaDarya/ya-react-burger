import uuid from "react-uuid";
import { TEXT_CSS, TextCssType } from "../../constants/text-css-type";
import { TFeedOrdersIdListProps } from "../../types/types";
import styles from "./feed-orders-id-list.module.css";

function FeedOrdersIdList({ orders }: TFeedOrdersIdListProps) {
  return (
    <ul className={`${styles.list} ${TEXT_CSS[TextCssType.DigitsDefault]}`}>
      {orders.map((order) => (
        <li key={uuid()}>{order}</li>
      ))}
    </ul>
  );
}

export default FeedOrdersIdList;
