import FeedCard from "../../components/feed-card/feed-card";
import FeedStatistic from "../../components/feed-statistic/feed-statistic";
import FeedOrdersBlock from "../../components/feed-orders-block/feed-orders-block";
import FeedOrdersIdBlock from "../../components/feed-orders-id-block/feed-orders-id-block";
import { AppRoute } from "../../constants/app-route";
import feedStyles from "./orders-feed-page.module.css";

function OrdersFeedPage() {
  return (
    <main className={feedStyles.main}>
      <h1 className="text text_type_main-large mb-5">Лента заказов</h1>
      <div className={feedStyles.container}>
        <FeedOrdersBlock classes={feedStyles["feed-container"]}>
          <FeedCard route={AppRoute.OrdersFeed} />
          <FeedCard route={AppRoute.OrdersFeed} />
          <FeedCard route={AppRoute.OrdersFeed} />
          <FeedCard route={AppRoute.OrdersFeed} />
          <FeedCard route={AppRoute.OrdersFeed} />
        </FeedOrdersBlock>
        <div className={feedStyles["feed-info"]}>
          <div className={feedStyles["orders-info"]}>
            <FeedOrdersIdBlock
              title={"Готовы:"}
              isDone={true}
              orders={["034533", "034532", "034530", "034527", "034525"]}
            />
            <FeedOrdersIdBlock
              title={"В работе:"}
              isDone={false}
              orders={["034538", "034541", "034542"]}
            />
          </div>
          <FeedStatistic title={"Выполнено за все время:"} count={"28 752"} />
          <FeedStatistic title={"Выполнено за сегодня:"} count={"138"} />
        </div>
      </div>
    </main>
  );
}

export default OrdersFeedPage;
