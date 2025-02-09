import { STATUS, STATUS_TEXT } from "../../constants/order-status";
import { TextCssType } from '../../constants/text-css-type';
import { TOrderStatusProps } from "../../types/types";
import Text from '../text/text';
import styles from "./order-status.module.css";

function OrderStatus({ status }: TOrderStatusProps) {
  return (
    <Text
      type={TextCssType.TextDefault}
      classes={`
        ${styles.status}
        ${status === STATUS.done ? styles.done : ""}
        ${status === STATUS.pending ? styles.pending : ""}
        ${status === STATUS.created ? styles.created : ""}
      `}
    >
      {STATUS_TEXT[status]}
    </Text>
  );
}

export default OrderStatus;
