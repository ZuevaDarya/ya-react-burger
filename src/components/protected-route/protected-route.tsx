import { Navigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { ProtectedRoutePropsType } from "../../types/types";
import { useEffect, useState } from "react";
import { AppRoute } from "../../constants/app-route";
import { getUser } from "../../services/thunks";

function ProtectedRoute({ withAuth, children }: ProtectedRoutePropsType) {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const { user } = useAppSelector((state) => state.userInfo);

  useEffect(() => {
    const preloadUser = async () => {
      await dispatch(getUser());
      setIsUserLoaded(true);
    };

    preloadUser();
  }, []);

  if (!isUserLoaded) {
    return null;
  }

  if (!withAuth && !user) {
    return (
      <Navigate
        to={`${AppRoute.Login}?redirect=${location.pathname}`}
        state={{ from: location }}
        replace
      />
    );
  }

  if (withAuth && user) {
    return <Navigate to={AppRoute.Home} state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;
