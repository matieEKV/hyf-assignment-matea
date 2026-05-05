import { useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
import { SocialMediaItem } from "./SocialMediaItem";
import { Link } from "react-router-dom";

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
          <SocialMediaItem
            url="https://facebook.com"
            title="Facebook"
            icon="public/socialmedia/fejs.png"
          />
          <SocialMediaItem
            url="https://instagram.com"
            title="Instagram"
            icon="public/socialmedia/instagram.png"
          />
          <SocialMediaItem
            url="https://tiktok.com"
            title="Tiktok"
            icon="public/socialmedia/tiktok.png"
          />
          <SocialMediaItem
            url="https://linkedin.com"
            title="LinkedIn"
            icon="public/socialmedia/linkedin.png"
          />
          <SocialMediaItem
            url="https://google.com"
            title="On the streets at night"
            icon="public/socialmedia/night.jpg"
          />
        </ul>
      </div>
    </footer>
  );
};
