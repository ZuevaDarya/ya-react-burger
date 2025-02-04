import { TFeedOrdersBlockProps } from "../../types/types";
import styles from "./feed-orders-block.module.css";

function FeedOrdersBlock({ classes, children }: TFeedOrdersBlockProps) {
  return (
    <div className={`${styles["orders-container"]} ${classes ? classes : ""}`}>
      {children}
    </div>
  );
}

export default FeedOrdersBlock;
