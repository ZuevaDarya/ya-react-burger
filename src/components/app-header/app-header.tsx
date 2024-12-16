import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import NavList from "../nav-list/nav-list";
import NavListItem from "../nav-list-item/nav-list-item";
import headerStyles from "./app-header.module.css";
import { AppRoute } from '../../constants/app-route';

function AppHeader() {
  return (
    <header className={`${headerStyles.header} pt-4 pb-4`}>
      <nav className={headerStyles.nav}>
        <NavList>
          <NavListItem linkText="Конструктор" linkHref={AppRoute.Home} isActive={true} classes="pr-5">
            <BurgerIcon type="primary" className="nav-icon_primary" />
          </NavListItem>
          <NavListItem linkText="Лента заказов" linkHref="#" isActive={false} classes="pl-5 pr-5">
            <ListIcon type="disabled" className="nav-icon_disabled" />
          </NavListItem>
        </NavList>
        <Logo className={headerStyles.logo} />
        <NavList>
          <NavListItem linkText="Личный кабинет" linkHref={AppRoute.Profile} isActive={false} classes="pl-5">
            <ProfileIcon type="disabled" className="nav-icon_disabled" />
          </NavListItem>
        </NavList>
      </nav>
    </header>
  );
}

export default AppHeader;
