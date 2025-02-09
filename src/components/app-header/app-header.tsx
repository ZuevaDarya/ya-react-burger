import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppRoute } from "../../constants/app-route";
import { useAppSelector } from "../../services/store";
import NavListItem from "../nav-list-item/nav-list-item";
import NavList from "../nav-list/nav-list";
import headerStyles from "./app-header.module.css";

function AppHeader() {
  const { pathname } = useLocation();
  const user = useAppSelector((state) => state.userInfo.user);

  const getIconType = useCallback(
    (pathname: string, currentRoute: AppRoute) => {
      return pathname === currentRoute ? "primary" : "secondary";
    },
    [pathname]
  );

  return (
    <header className={`${headerStyles.header} pt-4 pb-4`}>
      <nav className={headerStyles.nav}>
        <NavList>
          <NavListItem route={AppRoute.Home} classes="pr-5">
            <BurgerIcon type={getIconType(pathname, AppRoute.Home)} />
            Конструктор
          </NavListItem>
          <NavListItem route={AppRoute.OrdersFeed} classes="pl-5 pr-5">
            <ListIcon type={getIconType(pathname, AppRoute.OrdersFeed)} />
            Лента заказов
          </NavListItem>
        </NavList>
        <Link to={AppRoute.Home} className={headerStyles.logo}>
          <Logo />
        </Link>
        <NavList>
          <NavListItem route={AppRoute.Profile} classes="pl-5">
            <ProfileIcon type={getIconType(pathname, AppRoute.Profile)} />
            {!user ? "Личный кабинет" : user.name}
          </NavListItem>
        </NavList>
      </nav>
    </header>
  );
}

export default AppHeader;
