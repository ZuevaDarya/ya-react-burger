import { Status, STATUS_TEXT } from "../../constants/order-status";
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
        ${status === Status.Done ? styles.done : ""}
        ${status === Status.Pending ? styles.pending : ""}
        ${status === Status.Created ? styles.created : ""}
      `}
    >
      {STATUS_TEXT[status]}
    </Text>
  );
}

export default OrderStatus;
