import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import NavList from "../nav-list/nav-list";
import NavListItem from "../nav-list-item/nav-list-item";
import headerStyles from "./app-header.module.css";
import { AppRoute } from "../../constants/app-route";
import { useLocation } from "react-router-dom";
import { useCallback } from "react";

function AppHeader() {
  const { pathname } = useLocation();

  const getIconType = useCallback((pathname: string, currentRoute: AppRoute) => {
      return pathname === currentRoute ? "primary" : "secondary";
    }, [pathname]);

  return (
    <header className={`${headerStyles.header} pt-4 pb-4`}>
      <nav className={headerStyles.nav}>
        <NavList>
          <NavListItem route={AppRoute.Home} classes="pr-5">
            <BurgerIcon type={getIconType(pathname, AppRoute.Home)} />
            Конструктор
          </NavListItem>
          <NavListItem route={AppRoute.Error} classes="pl-5 pr-5">
            <ListIcon type={getIconType(pathname, AppRoute.Error)} />
            Лента заказов
          </NavListItem>
        </NavList>
        <Logo className={headerStyles.logo} />
        <NavList>
          <NavListItem route={AppRoute.Profile} classes="pl-5">
            <ProfileIcon type={getIconType(pathname, AppRoute.Profile)} />
            Личный кабинет
          </NavListItem>
        </NavList>
      </nav>
    </header>
  );
}

export default AppHeader;
