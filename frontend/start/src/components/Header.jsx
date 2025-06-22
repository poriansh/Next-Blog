

import NavLink from "./NavLink";
// import {useAuth} from "@/context/AuthContext";

const navLinks = [
  {
    id: 1,
    title: "خانه",
    path: "/",
  },
  {
    id: 2,
    title: "بلاگ ها",
    path: "/blogs",
  },
];

function Header() {
//   const {user, isLoading} = useAuth();
    const user = false
  return (
    <header
      className={`z-10 shadow-md bg bg-white bg-inherit mb-10 sticky top-0 transition-all duration-200 border-b border-b-appsecondary-300`}
    >
      <nav className="container xl:max-w-screen-xl">
        <ul className="flex items-center text-appsecondary-400  justify-between py-2">
          <div className="flex items-center gap-x-10">
            {navLinks.map((navLink) => {
              return (
                <li key={navLink.id}>
                  <NavLink path={navLink.path}>{navLink.title}</NavLink>
                </li>
              );
            })}
          </div>
          <li>
            {user ? (
              <NavLink path="/profile">پروفایل</NavLink>
            ) : (
              <NavLink path="/auth">ورود</NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
