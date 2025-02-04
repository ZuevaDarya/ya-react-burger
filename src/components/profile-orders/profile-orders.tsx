import { Status } from "../../constants/order-status";
import FeedCard from "../feed-card/feed-card";
import FeedOrdersBlock from "../feed-orders-block/feed-orders-block";

function ProfileOrders() {
  return (
    <FeedOrdersBlock>
      <FeedCard orderStatus={Status.Created} />
      <FeedCard orderStatus={Status.Pending} />
      <FeedCard orderStatus={Status.Done} />
      <FeedCard orderStatus={Status.Done} />
      <FeedCard orderStatus={Status.Done} />
    </FeedOrdersBlock>
  );
}

export default ProfileOrders;
