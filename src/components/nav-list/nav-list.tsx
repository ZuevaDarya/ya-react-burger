import { NavListPropsType } from "../../types/types";
import navListStyles from "./nav-list.module.css";

function NavList({ children }: NavListPropsType) {
  return <ul className={navListStyles["nav-list"]}>{children}</ul>;
}

export default NavList;
