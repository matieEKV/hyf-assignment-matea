import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { Planet } from "../icons/Planet";
import { Badge } from "./Badge";
import styles from "./Navbar.module.css";
import { NavItem } from "./NavItem";
import { usePlanetContext } from "../context/PlanetsContext.jsx";

const navbarItems = [
  {
    id: "01",
    title: "ABOUT US",
    link: "/about_us",
  },
  {
    id: "02",
    title: "DESTINATION",
    link: "/destination",
  },
  {
    id: "03",
    title: "NASA COLLABORATION",
    link: "/nasa_collaboration",
  },
];

export const Navbar = () => {
  const currentPath = useLocation().pathname;
  const { wishlistCount } = usePlanetContext();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href="/">
          <img src="/shared/logo.svg" alt="" /> GALACTICA
        </a>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          {navbarItems.map((item) => (
            <NavItem
              key={item.id}
              title={item.title}
              link={item.link}
              className={classNames(styles.navbarLinks, {
                [styles.isLinkActive]: item.link === currentPath,
              })}
            />
          ))}

          <li className={styles.wishlistBadge} aria-label="Wishlist"></li>
        </ul>
        {/* 🧑🏽‍🚀 Task - Week 4 - part 3 */}
        {/* Take the count of the planets wishlist from the context and display it in the Badge. */}
        <Badge wishlistCount={0}>
          <Planet color="white" />
        </Badge>
      </nav>
    </header>
  );
};
