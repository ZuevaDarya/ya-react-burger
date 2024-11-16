import { NavListPropsType } from "../../types/types";
import "./nav-list.css";

function NavList({ children }: NavListPropsType) {
  return <ul className="nav-list">{children}</ul>;
}

export default NavList;
