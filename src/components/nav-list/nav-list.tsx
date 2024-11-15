import "./nav-list.css";

type NavBarPropsType = {
  children: React.ReactNode;
};

function NavList({ children }: NavBarPropsType) {
  return <ul className="nav-list">{children}</ul>;
}

export default NavList;
