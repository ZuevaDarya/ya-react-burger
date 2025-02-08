import { useEffect } from "react";
import { WS_URLS } from "../../constants/api-constants";
import { localStorageKey } from '../../constants/local-storage-key';
import { profileOrdersActions } from "../../services/slices/profile-orders-slice";
import { useAppDispatch, useAppSelector } from "../../services/store";
import FeedOrdersBlock from "../feed-orders-block/feed-orders-block";
import { AppRoute } from '../../constants/app-route';
import isOrderDataCorrect from '../../utils/functions/is-order-data-correct';
import FeedCard from '../feed-card/feed-card';

function ProfileOrders() {
  const dispath = useAppDispatch();
  const orders = useAppSelector((state) => state.profileOrders.orders);

  useEffect(() => {
    const accessToken = localStorage.getItem(localStorageKey.AccessToken);
    dispath(profileOrdersActions.connect(`${WS_URLS.userOrders}?token=${accessToken}`));

    return () => {
      dispath(profileOrdersActions.disconnect());
    };
  }, [dispath]);

  return (
    <FeedOrdersBlock>
      {orders.slice(0).reverse().map((order) => {
        if (!isOrderDataCorrect(order.ingredients)) {
          return null;
        }
        return (
          <FeedCard
            key={order._id}
            route={AppRoute.Orders}
            orderStatus={order.status}
            order={order}
          />
        );
      })}
    </FeedOrdersBlock>
  );
}

export default ProfileOrders;
