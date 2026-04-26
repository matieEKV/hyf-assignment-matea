import styles from "./SocialMediaItem.module.css";

export const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li className={styles.socialList}>
      <img className={styles.socialIcon} src={icon}></img>
      <a href={url}>{title}</a>
    </li>
  );
};
