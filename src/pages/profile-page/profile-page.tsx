import NavListItem from "../../components/nav-list-item/nav-list-item";
import profileStyles from "./profile-page.module.css";
import { AppRoute } from "../../constants/app-route";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../services/store";
import { logout } from "../../services/thunks";

function ProfilePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogoutBtnClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    await dispatch(logout());
    navigate(AppRoute.Home);
  };

  return (
    <main className={profileStyles.main}>
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

        <p className={`${profileStyles.p} text text_type_main-default`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </aside>

      <Outlet />
    </main>
  );
}

export default ProfilePage;
