import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import NavList from "../nav-list/nav-list";
import NavListItem from "../nav-list-item/nav-list-item";
import "./app-header.css";

function AppHeader() {
  return (
    <header className="header pt-4 pb-4">
      <nav className="header-nav">
        <NavList>
          <NavListItem linkText="Конструктор" linkHref="#" isActive={true} classes="pr-5">
            <BurgerIcon type="primary" className="nav-icon_primary" />
          </NavListItem>
          <NavListItem linkText="Лента заказов" linkHref="#" isActive={false} classes="pl-5 pr-5">
            <ListIcon type="disabled" className="nav-icon_disabled" />
          </NavListItem>
        </NavList>
        <Logo />
        <NavList>
          <NavListItem linkText="Личный кабинет" linkHref="#" isActive={false} classes="pl-5">
            <ProfileIcon type="disabled" className="nav-icon_disabled" />
          </NavListItem>
        </NavList>
      </nav>
    </header>
  );
}

export default AppHeader;
