import { NavLinkPropsType } from "../../types/types";
import navItemStyles from "./nav-list-item.module.css";

function NavListItem({
  linkText,
  linkHref,
  isActive,
  classes,
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
      {children}
      <a
        className={`text text_type_main-default ${linkActiveClass}`}
        href={linkHref}
      >
        {linkText}
      </a>
    </li>
  );
}

export default NavListItem;
