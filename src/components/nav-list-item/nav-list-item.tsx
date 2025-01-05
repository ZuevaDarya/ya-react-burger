import { NavLink, NavLinkRenderProps } from "react-router-dom";
import { TNavLinkProps } from "../../types/types";
import navItemStyles from "./nav-list-item.module.css";

function NavListItem({
  route,
  classes,
  isProfileLink,
  children,
}: TNavLinkProps) {
  const getLinkClasses = ({ isActive }: NavLinkRenderProps) => {
    const defaultClasses = `
      ${!isProfileLink ? "text text_type_main-default" : "text text_type_main-medium"} 
      ${navItemStyles["nav-link"]} 
    `;

    if (!isActive) {
      return `${defaultClasses} ${navItemStyles["nav-link_disabled"]}`;
    }
    return `${defaultClasses} ${navItemStyles["nav-link_default"]}`;
  };

  return (
    <li
      className={`
        ${navItemStyles["nav-list-item"]} pt-4 pb-4 
        ${classes ? classes : ""}
      `}
    >
      <NavLink className={getLinkClasses} to={route} end>
        {children}
      </NavLink>
    </li>
  );
}

export default NavListItem;
