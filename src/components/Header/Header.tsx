import clsx from "clsx";
import { NavLink } from "react-router-dom";

import s from "./Header.module.css";

type LinkType = {
  isActive: boolean | string;
};

const navList = [
  { text: "Home", link: "/" },
  { text: "Catalog", link: "/catalog" },
  { text: "Favorites", link: "/favorites" },
];

const buildLinkClass = ({ isActive }: LinkType): string => {
  return `${isActive && s.active}`;
};

const Header = () => {
  return (
    <div
      className={clsx(
        s.headerWrapper,
        "sticky top-0 bg-white z-10 p-[24px] mb-[24px]"
      )}
    >
      <header>
        <nav>
          <ul className="flex justify-center items-center gap-[12px] w-[100%]">
            {navList.map((el) => (
              <li key={el.text} className={s.itemLink}>
                <NavLink to={el.link} className={buildLinkClass}>
                  {el.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
