import { NavLink } from 'react-router-dom';
import { NavLinkPropsType } from "../../types/types";
import navItemStyles from "./nav-list-item.module.css";

function NavListItem({
  linkText,
  linkHref,
  isActive,
  classes,
  linkClasses,
  children,
}: NavLinkPropsType) {
  const LINK_TYPES = {
    default: navItemStyles["nav-link_default"],
    disabled: navItemStyles["nav-link_disabled"],
  };

  let linkActiveClass = LINK_TYPES.default;
  if (!isActive) {
    linkActiveClass = LINK_TYPES.disabled;
  }

  return (
    <li className={`${navItemStyles["nav-list-item"]} pt-4 pb-4 ${classes}`}>
      <NavLink
        className={`text text_type_main-default ${navItemStyles["nav-link"]} ${linkClasses} ${linkActiveClass}`}
        to={linkHref}
      >
        {children}
        {linkText}
      </NavLink>
    </li>
  );
}

export default NavListItem;
