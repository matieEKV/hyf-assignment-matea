import styles from "../pages/NasaCollaborationPage/NasaCollaborationPage.module.css";

export const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <>
      <p>Date {date}</p>
      <img className={styles.nasaPicOfTheDayImg} src={src} alt={roverName} />
    </>
  );
};

{
  /* 🧑🏽‍🚀 Task - Week 3 */
}
{
  /* Create a react component for the <RoverPhoto />, which should accept the following props: */
}
{
  /* 1. src: source of the img; */
}
{
  /* 2. date: earth_date data coming from the API; */
}
{
  /* 3. roverName: will be in the rover object. */
}
