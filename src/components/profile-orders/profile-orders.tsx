import { AppRoute } from '../../constants/app-route';
import { Status } from "../../constants/order-status";
import FeedCard from "../feed-card/feed-card";
import FeedOrdersBlock from "../feed-orders-block/feed-orders-block";

function ProfileOrders() {
  return (
    <FeedOrdersBlock>
      <FeedCard orderStatus={Status.Created} route={AppRoute.Orders} />
      <FeedCard orderStatus={Status.Pending} route={AppRoute.Orders} />
      <FeedCard orderStatus={Status.Done} route={AppRoute.Orders} />
      <FeedCard orderStatus={Status.Done} route={AppRoute.Orders} />
      <FeedCard orderStatus={Status.Done} route={AppRoute.Orders} />
    </FeedOrdersBlock>
  );
}

export default ProfileOrders;
