import { TextCssType } from "../../constants/text-css-type";
import doneImg from "../../images/done.svg";
import { useAppSelector } from "../../services/store";
import Spinner from "../spinner/spinner";
import Text from '../text/text';
import Title from "../title/title";
import orderStyles from "./order-details.module.css";

function OrderDetails() {
  const { isRequest, isSuccess, order } = useAppSelector(
    (store) => store.orderDetails
  );

  return (
    <>
      {isRequest && (
        <div className={orderStyles["spinner-block"]}>
          <Title type={TextCssType.TextLarge}>Оформляем заказ...</Title>
          <Spinner />
        </div>
      )}

      {isSuccess && order && (
        <div className={orderStyles["order-details"]}>
          <Title
            type={TextCssType.DigitsLarge}
            classes={`${orderStyles["order-id"]} mb-8`}
          >
            {order.number}
          </Title>
          <Text type={TextCssType.TextMedium}>идентификатор заказа</Text>
          <img className="mt-15 mb-15" src={doneImg} alt="заказ оформлен" />
          <Text type={TextCssType.TextDefault} classes="mb-2">
            Ваш заказ начали готовить
          </Text>
          <Text type={TextCssType.TextInactive}>
            Дождитесь готовности на орбитальной станции
          </Text>
        </div>
      )}

      {!isSuccess && !isRequest && (
        <div className={orderStyles["error-block"]}>
          <Title type={TextCssType.TextLarge}>Ошибка оформления заказа</Title>
          <Text type={TextCssType.TextInactive}>
            Кажется, на орбитальной станции произошла авараия...
            <br />
            Попробуйте оформить заказ еще раз!
          </Text>
        </div>
      )}
    </>
  );
}

export default OrderDetails;
