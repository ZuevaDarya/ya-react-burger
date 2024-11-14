import {
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import NavBar from "../nav-bar/nav-bar";
import NavLink from "../nav-link/nav-link";
import "./app-header.css";

function AppHeader() {
  return (
    <header className="header pt-4 pb-4">
      <div className="header-container">
        <NavBar />
        <Logo />
        <NavLink linkText="Личный кабинет" linkHref="#">
          <ProfileIcon type="disabled" />
        </NavLink>
      </div>
    </header>
  );
}

export default AppHeader;
