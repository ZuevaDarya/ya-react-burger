import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AppRoute } from "../../constants/app-route";
import { localStorageKey } from "../../constants/local-storage-key";
import ErrorPage from "../../pages/error-page/error-page";
import ForgotPasswordPage from "../../pages/forgot-password-page/forgot-password-page";
import HomePage from "../../pages/home-page/home-page";
import IngredientPage from "../../pages/ingredient-page/ingredient-page";
import LoginPage from "../../pages/login-page/login-page";
import OrdersFeedPage from "../../pages/orders-feed-page/orders-feed-page";
import ProfilePage from "../../pages/profile-page/profile-page";
import RegistrationPage from "../../pages/registration-page/registration-page";
import ResetpasswordPage from "../../pages/reset-password-page/reset-password-page";
import { useAppDispatch } from "../../services/store";
import { getIngredients, getUser } from "../../services/thunks";
import AppLayout from "../app-layout/app-layout";
import ModalIngredientDetails from "../modal-ingredient-details/modal-ingredient-details";
import ProfileForm from "../profile-form/profile-form";
import ProtectedRoute from "../protected-route/protected-route";
import ProfileOrders from '../profile-orders/profile-orders';

function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  useEffect(() => {
    const authUser = async () => {
      const refreshToken = localStorage.getItem(localStorageKey.RefreshToken);
      const accessToken = localStorage.getItem(localStorageKey.AccessToken);

      if (refreshToken && accessToken) {
        await dispatch(getUser()).unwrap();
      }
    };

    authUser();
  }, []);

  return (
    <>
      <Routes location={location.state?.background || location}>
        <Route path={AppRoute.Home} element={<AppLayout />}>
          <Route path={AppRoute.Home} element={<HomePage />} />
          <Route
            path={AppRoute.Login}
            element={
              <ProtectedRoute withAuth={true}>
                <LoginPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoute.ForgotPassword}
            element={
              <ProtectedRoute withAuth={true}>
                <ForgotPasswordPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoute.ResetPassword}
            element={
              <ProtectedRoute withAuth={true}>
                <ResetpasswordPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoute.Registration}
            element={
              <ProtectedRoute withAuth={true}>
                <RegistrationPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoute.Profile}
            element={
              <ProtectedRoute withAuth={false}>
                <ProfilePage />
              </ProtectedRoute>
            }
          >
            <Route path={AppRoute.Profile} element={<ProfileForm />} />
            <Route path={AppRoute.Orders} element={<ProfileOrders />} />
          </Route>
          <Route path={AppRoute.Ingredient} element={<IngredientPage />} />
          <Route
            path={AppRoute.Order}
            element={
              <ProtectedRoute withAuth={false}>
                <p>Order</p>
              </ProtectedRoute>
            }
          />
          <Route path={AppRoute.OrdersFeed} element={<OrdersFeedPage />}>
            <Route path={AppRoute.OrderFeed} element={""} />
          </Route>
        </Route>
        <Route path={AppRoute.Error} element={<ErrorPage />} />
      </Routes>

      {location.state?.background ? (
        <Routes>
          <Route
            path={AppRoute.Ingredient}
            element={<ModalIngredientDetails />}
          />
        </Routes>
      ) : null}
    </>
  );
}
export default App;
