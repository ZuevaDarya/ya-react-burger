import { Status, STATUS_TEXT } from "../../constants/order-status";
import { TOrderStatusProps } from "../../types/types";
import styles from "./order-status.module.css";

function OrderStatus({ status }: TOrderStatusProps) {
  return (
    <p
      className={`text text_type_main-default
        ${styles.status}
        ${status === Status.Done ? styles.done : ""}
        ${status === Status.Pending ? styles.pending : ""}
        ${status === Status.Created ? styles.created : ""}
      `}
    >
      {STATUS_TEXT[status]}
    </p>
  );
}

export default OrderStatus;
