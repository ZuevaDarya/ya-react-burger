import { Route, Routes, useLocation } from "react-router-dom";
import { AppRoute } from "../../constants/app-route";
import HomePage from "../../pages/home-page/home-page";
import ErrorPage from "../../pages/error-page/error-page";
import AppLayout from "../app-layout/app-layout";
import LoginPage from "../../pages/login-page/login-page";
import ForgotPasswordPage from "../../pages/forgot-password-page/forgot-password-page";
import ResetpasswordPage from "../../pages/reset-password-page/reset-password-page";
import RegistrationPage from "../../pages/registration-page/registration-page";
import ProfilePage from "../../pages/profile-page/profile-page";
import IngredientPage from "../../pages/ingredient-page/ingredient-page";
import { useEffect } from "react";
import { useAppDispatch } from "../../services/store";
import { getIngredients, getUser } from "../../services/thunks";
import ProtectedRoute from "../protected-route/protected-route";
import ProfileForm from "../profile-form/profile-form";
import ModalIngredientDetails from "../modal-ingredient-details/modal-ingredient-details";
import { localStorageKey } from '../../constants/local-storage-key';

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
            <Route path={AppRoute.Orders} element={<p>Orders</p>} />
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
