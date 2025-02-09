import { useEffect, useMemo } from "react";
import FeedCard from "../../components/feed-card/feed-card";
import FeedOrdersBlock from "../../components/feed-orders-block/feed-orders-block";
import FeedOrdersIdBlock from "../../components/feed-orders-id-block/feed-orders-id-block";
import FeedStatistic from "../../components/feed-statistic/feed-statistic";
import Title from "../../components/title/title";
import { WS_URLS } from "../../constants/api-constants";
import { AppRoute } from "../../constants/app-route";
import { TextCssType } from "../../constants/text-css-type";
import { feedOrdersActions } from "../../services/slices/feed-orders-slice";
import { useAppDispatch, useAppSelector } from "../../services/store";
import getOrdersByStatus from "../../utils/functions/get-orders-by-status";
import isOrderDataCorrect from "../../utils/functions/is-order-data-correct";
import feedStyles from "./feed-orders-page.module.css";

function FeedOrdersPage() {
  const dispatch = useAppDispatch();
  const { orders, total, totalToday } = useAppSelector(
    (state) => state.feedOrders
  );

  useEffect(() => {
    dispatch(feedOrdersActions.connect(WS_URLS.allOrders));
    return () => {
      dispatch(feedOrdersActions.disconnect());
    };
  }, [dispatch]);

  const doneOrders = useMemo(() => {
    return getOrdersByStatus(orders, "done");
  }, [orders]);

  const pendingOrders = useMemo(() => {
    return getOrdersByStatus(orders, "pending");
  }, [orders]);

  return (
    <main className={feedStyles.main}>
      <Title type={TextCssType.TextLarge} classes="mb-5">
        Лента заказов
      </Title>
      <div className={feedStyles.container}>
        <FeedOrdersBlock classes={feedStyles["feed-container"]}>
          {orders.map((order) => {
            if (!isOrderDataCorrect(order.ingredients)) {
              return null;
            }
            return (
              <FeedCard
                key={order._id}
                route={AppRoute.OrdersFeed}
                order={order}
              />
            );
          })}
        </FeedOrdersBlock>
        <div className={feedStyles["feed-info"]}>
          <div className={feedStyles["orders-info"]}>
            <FeedOrdersIdBlock
              title={"Готовы:"}
              isDone={true}
              orders={doneOrders}
            />
            <FeedOrdersIdBlock
              title={"В работе:"}
              isDone={false}
              orders={pendingOrders}
            />
          </div>
          <FeedStatistic title="Выполнено за все время:" count={total} />
          <FeedStatistic title="Выполнено за сегодня:" count={totalToday} />
        </div>
      </div>
    </main>
  );
}

export default FeedOrdersPage;
