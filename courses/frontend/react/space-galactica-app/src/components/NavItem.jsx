import styles from "./NavItem.module.css";
import { Link } from "react-router-dom";

export const NavItem = ({ title, link, isActive }) => {
  return (
    <li className={isActive}>
      <Link to={link}>{title}</Link>
    </li>
  );
};
