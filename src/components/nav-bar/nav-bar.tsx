import {
  BurgerIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import NavLink from "../nav-link/nav-link";
import './nav-bar.css';

function NavBar() {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <NavLink linkText="Конструктор" linkHref="#">
            <BurgerIcon type="primary" />
          </NavLink>
        </li>
        <li>
          <NavLink linkText="Лента заказов" linkHref="#">
            <ListIcon type="disabled" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
