import "./nav-list-item.css";

type NavLinkPropsType = {
  linkText: string;
  linkHref: string;
  isActive: boolean;
  children?: React.ReactNode;
};

function NavListItem({ linkText, linkHref, isActive, children}: NavLinkPropsType) {
  const LINK_TYPES = {
    default: "nav-link_default",
    disabled: "nav-link_disabled",
  };

  let linkActiveClass = LINK_TYPES.default;
  if (!isActive) {
    linkActiveClass = LINK_TYPES.disabled;
  }

  return (
    <li className="nav-list-item pt-4 pb-4 pl-5 pr-5">
      {children}
      <a
        className={`text text_type_main-default nav-link ${linkActiveClass}`}
        href={linkHref}
      >
        {linkText}
      </a>
    </li>
  );
}

export default NavListItem;
