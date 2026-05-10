import { useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
import { SocialMediaItem } from "./SocialMediaItem";
import { Link } from "react-router-dom";
import socialMedia from "../data/socialMedia.js";

export const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer className={pathname !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>

      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li className={styles.pagesList}>
            <Link to="/">Home</Link>
            <Link to="/destination">Destination</Link>
            <Link to="/about_us">About Us</Link>
          </li>
        </ul>
      </div>

      {/* Docs for the Link: https://reactrouter.com/api/components/Link#link. */}
      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          {socialMedia.map((item) => (
            <SocialMediaItem
              url={item.url}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </ul>
      </div>
    </footer>
  );
};
