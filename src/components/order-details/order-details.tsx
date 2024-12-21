import orderStyles from "./order-details.module.css";
import doneImg from "../../images/done.svg";
import { useAppSelector } from "../../services/store";
import Spinner from "../spinner/spinner";

function OrderDetails() {
  const { isRequest, isSuccess, order } = useAppSelector(store => store.orderDetails);

  return (
    <>
      {isRequest && (
        <div className={orderStyles["spinner-block"]}>
          <h1 className="text text_type_main-large">Оформляем заказ...</h1>
          <Spinner />
        </div>
      )}

      {isSuccess && order && (
        <div className={orderStyles["order-details"]}>
          <h1
            className={`${orderStyles["order-id"]} text text_type_digits-large mb-8`}
          >
            {order.number}
          </h1>
          <p className="text text_type_main-medium">идентификатор заказа</p>
          <img className="mt-15 mb-15" src={doneImg} alt="заказ оформлен" />
          <p className="text text_type_main-default mb-2">
            Ваш заказ начали готовить
          </p>
          <p className="text text_type_main-default text_color_inactive">
            Дождитесь готовности на орбитальной станции
          </p>
        </div>
      )}

      {!isSuccess && !isRequest && (
        <div className={orderStyles["error-block"]}>
          <h1 className="text text_type_main-large">
            Ошибка оформления заказа
          </h1>
          <p className="text text_type_main-default text_color_inactive">
            Кажется, на орбитальной станции произошла авараия...
            <br />
            Попробуйте оформить заказ еще раз!
          </p>
        </div>
      )}
    </>
  );
}

export default OrderDetails;
