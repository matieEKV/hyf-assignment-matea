import styles from "../pages/NasaCollaborationPage/NasaCollaborationPage.module.css";

export const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <div className={styles.roverCard}>
      <p>
        {roverName} {date}
      </p>
      <img className={styles.roverImg} src={src} alt={roverName} />
    </div>
  );
};
