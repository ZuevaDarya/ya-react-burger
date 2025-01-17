import NavListItem from "../../components/nav-list-item/nav-list-item";
import profileStyles from "./profile-page.module.css";
import { AppRoute } from "../../constants/app-route";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { logout } from "../../services/thunks";
import Spinner from "../../components/spinner/spinner";

function ProfilePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { isLogoutRequest } = useAppSelector((store) => store.userInfo);

  const handleLogoutBtnClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    await dispatch(logout());
    navigate(AppRoute.Login);
  };

  return (
    <main className={profileStyles.main}>
      {isLogoutRequest && (
        <div className={profileStyles["spinner-block"]}>
          <h1 className="text text_type_main-medium">Выходим...</h1>
          <Spinner />
        </div>
      )}
      <aside className={profileStyles.aside}>
        <nav>
          <ul>
            <NavListItem route={AppRoute.Profile} isProfileLink={true}>
              Профиль
            </NavListItem>
            <NavListItem route={AppRoute.Orders} isProfileLink={true}>
              История заказов
            </NavListItem>
            <button
              type="button"
              className={`${profileStyles.button} text text_type_main-medium`}
              onClick={handleLogoutBtnClick}
            >
              Выход
            </button>
          </ul>
        </nav>

        {pathname === AppRoute.Profile && (
          <p className={`${profileStyles.p} text text_type_main-default`}>
            В этом разделе вы можете изменить свои персональные данные
          </p>
        )}

        {pathname === AppRoute.Orders && (
          <p className={`${profileStyles.p} text text_type_main-default`}>
            В этом разделе вы можете просмотреть свою историю заказов
          </p>
        )}
      </aside>

      <Outlet />
    </main>
  );
}

export default ProfilePage;
