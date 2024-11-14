import './nav-link.css';

type NavLinkPropsType = {
  linkText: string;
  linkHref: string;
  children?: React.ReactNode;
};

function NavLink({ linkText, linkHref, children }: NavLinkPropsType) {
  return (
    <li className="nav-link">
      {children}
      <a href={linkHref}>{linkText}</a>
    </li>
  );
}

export default NavLink;
