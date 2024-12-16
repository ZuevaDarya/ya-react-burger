import { NavLink, NavLinkRenderProps } from "react-router-dom";
import { NavLinkPropsType } from "../../types/types";
import navItemStyles from "./nav-list-item.module.css";

function NavListItem({
  route,
  classes,
  isProfileLink,
  children,
}: NavLinkPropsType) {
  const getLinkClasses = ({ isActive }: NavLinkRenderProps) => {
    const defaultClasses = `
      text text_type_main-default 
      ${navItemStyles["nav-link"]} 
      ${isProfileLink && "text text_type_main-medium"}
    `;

    if (!isActive) {
      return `${defaultClasses} ${navItemStyles["nav-link_disabled"]}`;
    }
    return `${defaultClasses} ${navItemStyles["nav-link_default"]}`;
  };

  return (
    <li className={`${navItemStyles["nav-list-item"]} pt-4 pb-4 ${classes}`}>
      <NavLink className={getLinkClasses} to={route}>
        {children}
      </NavLink>
    </li>
  );
}

export default NavListItem;
