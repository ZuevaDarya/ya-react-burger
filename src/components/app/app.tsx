import { Route, Routes } from "react-router-dom";
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
import { getIngredients } from "../../services/thunks";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  return (
    <Routes>
      <Route path={AppRoute.Home} element={<AppLayout />}>
        <Route path={AppRoute.Home} element={<HomePage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.ForgotPassword} element={<ForgotPasswordPage />}/>
        <Route path={AppRoute.ResetPassword} element={<ResetpasswordPage />} />
        <Route path={AppRoute.Registration} element={<RegistrationPage />} />
        <Route path={AppRoute.Profile} element={<ProfilePage />} />
        <Route path={AppRoute.Ingredient} element={<IngredientPage />} />
      </Route>
      <Route path={AppRoute.Error} element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
