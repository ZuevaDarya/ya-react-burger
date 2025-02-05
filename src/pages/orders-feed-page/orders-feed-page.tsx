import FeedCard from "../../components/feed-card/feed-card";
import FeedStatistic from "../../components/feed-statistic/feed-statistic";
import FeedOrdersBlock from "../../components/feed-orders-block/feed-orders-block";
import FeedOrdersIdBlock from "../../components/feed-orders-id-block/feed-orders-id-block";
import { AppRoute } from "../../constants/app-route";
import feedStyles from "./orders-feed-page.module.css";
import Title from '../../components/title/title';
import { TextCssType } from '../../constants/text-css-type';

function OrdersFeedPage() {
  return (
    <main className={feedStyles.main}>
      <Title type={TextCssType.TextLarge} classes="mb-5">Лента заказов</Title>
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
