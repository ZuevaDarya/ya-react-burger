import { TextCssType } from "../../constants/text-css-type";
import { TFeedOrdersIdBlockProps } from "../../types/types";
import FeedOrdersIdList from "../feed-orders-id-list/feed-orders-id-list";
import Subtitle from "../subtitle/subtitle";
import styles from "./feed-orders-id-block.module.css";

function FeedOrdersIdBlock({ title, isDone, orders }: TFeedOrdersIdBlockProps) {
  return (
    <div className={styles.container}>
      <Subtitle type={TextCssType.TextMedium}>{title}</Subtitle>
      <div
        className={`
          ${styles["lists-container"]}
          ${isDone && styles["done-lists"]}
        `}
      >
        <FeedOrdersIdList orders={orders} />
      </div>
    </div>
  );
}

export default FeedOrdersIdBlock;
