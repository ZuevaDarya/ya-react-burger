import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavListItem from "../../components/nav-list-item/nav-list-item";
import Spinner from "../../components/spinner/spinner";
import Title from "../../components/title/title";
import { AppRoute } from "../../constants/app-route";
import { TextCssType } from "../../constants/text-css-type";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { logout } from "../../services/thunks";
import profileStyles from "./profile-page.module.css";
import Text from '../../components/text/text';

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
          <Title type={TextCssType.TextMedium}>Выходим...</Title>
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
          <Text type={TextCssType.TextDefault} classes={`${profileStyles.p}`}>
            В этом разделе вы можете изменить свои персональные данные
          </Text>
        )}

        {pathname === AppRoute.Orders && (
          <Text type={TextCssType.TextDefault} classes={`${profileStyles.p}`}>
            В этом разделе вы можете просмотреть свою историю заказов
          </Text>
        )}
      </aside>

      <Outlet />
    </main>
  );
}

export default ProfilePage;
