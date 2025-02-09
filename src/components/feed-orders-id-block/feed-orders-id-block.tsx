import { useMemo } from "react";
import uuid from "react-uuid";
import { TextCssType } from "../../constants/text-css-type";
import { TFeedOrdersIdBlockProps } from "../../types/types";
import groupArrayData from "../../utils/functions/group-array-data";
import FeedOrdersIdList from "../feed-orders-id-list/feed-orders-id-list";
import Subtitle from "../subtitle/subtitle";
import styles from "./feed-orders-id-block.module.css";

function FeedOrdersIdBlock({ title, isDone, orders }: TFeedOrdersIdBlockProps) {
  const groupedOrders = useMemo(() => {
    return groupArrayData<number>(orders, 6);
  }, [orders]);

  return (
    <div className={styles.container}>
      <Subtitle type={TextCssType.TextMedium}>{title}</Subtitle>
      <div
        className={`
          ${styles["lists-container"]}
          ${isDone && styles["done-lists"]}
        `}
      >
        {groupedOrders.map((ordersRow) => (
          <FeedOrdersIdList key={uuid()} orders={ordersRow} />
        ))}
      </div>
    </div>
  );
}

export default FeedOrdersIdBlock;
