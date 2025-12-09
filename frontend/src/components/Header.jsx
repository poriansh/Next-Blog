"use client";
import {getUserApi} from "@/services/UserServices";
import NavLink from "./NavLink";
import {useRequest} from "@/services/QueryHandler";

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
  return (
    <header
      className={`z-20 shadow-md bg bg-white bg-inherit mb-10 sticky top-0 transition-all duration-300 border-b border-b-appsecondary-300`}
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
        </ul>
      </nav>
    </header>
  );
}
export default Header;
