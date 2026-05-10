import { Link } from "react-router-dom";

export const NavItem = ({ id, title, link, className }) => {
  return (
    <li className={className}>
      <Link to={link}>
        <b>{id} </b>
        {title}
      </Link>
    </li>
  );
};
