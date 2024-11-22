import { OrderDetailsPropsType } from "../../types/types";
import orderStyles from "./order-details.module.css"; 
import doneImg from "../../images/done.svg";

function OrderDetails({ orderId }: OrderDetailsPropsType) {
  return (
    <div className={orderStyles["order-details"]}>
      <h1 className={`${orderStyles["order-id"]} text text_type_digits-large mb-8`}>{orderId}</h1>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <img className="mt-15 mb-15" src={doneImg} alt="заказ оформлен" />
      <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </div>
  );
}

export default OrderDetails;
