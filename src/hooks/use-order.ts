import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../services/store";
import { getOrder } from "../services/thunks";

const useOrder = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const feedOrders = useAppSelector((state) => state.feedOrders.orders);
  const profileOrders = useAppSelector((state) => state.profileOrders.orders);
  const { orderCard, isSuccess } = useAppSelector(
    (state) => state.orderDetails
  );

  const orderFromState = useMemo(() => {
    const feedOrder = feedOrders.find((order) => String(order.number) === id);

    if (!feedOrder) {
      const profileOrder = profileOrders.find((order) => String(order.number) === id);

      if (!profileOrder) {
        return null;
      } else {
        return profileOrder;
      }
    } else {
      return feedOrder;
    }
  }, [profileOrders, feedOrders]);

  useEffect(() => {
    if (id && !orderFromState) {
      dispatch(getOrder({ number: id })).unwrap();
    }
  }, [id, orderFromState]);

  return {
    order: orderFromState || orderCard,
    isSuccess,
  };
};

export default useOrder;
