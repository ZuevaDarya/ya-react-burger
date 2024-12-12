import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../../constants/app-routes';
import HomePage from '../../pages/home-page/home-page';
import ErrorPage from '../../pages/error-page/error-page';
import AppLayout from '../app-layout/app-layout';
import LoginPage from '../../pages/login-page/login-page';
import ForgotPasswordPage from '../../pages/forgot-password-page/forgot-password-page';
import ResetpasswordPage from '../../pages/reset-password-page/reset-password-page';
import RegistrationPage from '../../pages/registration-page/registration-page';
import ProfilePage from '../../pages/profile-page/profile-page';
import IngredientPage from '../../pages/ingredient-page/ingredient-page';

function App() {
  return (
    <Routes>
      <Route path={AppRoutes.Home} element={<AppLayout />}> 
        <Route path={AppRoutes.Home} element={<HomePage />}/>
        <Route path={AppRoutes.Login} element={<LoginPage />}/>
        <Route path={AppRoutes.ForgotPassword} element={<ForgotPasswordPage />}/>
        <Route path={AppRoutes.ResetPassword} element={<ResetpasswordPage />}/>
        <Route path={AppRoutes.Registration} element={<RegistrationPage />}/>
        <Route path={AppRoutes.Profile} element={<ProfilePage/>}/>
        <Route path={AppRoutes.Ingredient} element={<IngredientPage />}/>
      </Route>
      <Route path={AppRoutes.Error} element={<ErrorPage />}/>
    </Routes>
  );
}

export default App;
