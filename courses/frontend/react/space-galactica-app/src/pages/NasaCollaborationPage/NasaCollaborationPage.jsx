import React, { useState, useEffect } from "react";
import styles from "./NasaCollaborationPage.module.css";
import { NASA_API_KEY } from "/secret.js";
import { RoverPhoto } from "../../components/RoverPhoto.jsx";

// Read "/app/nasa_collaboration/README.md" for more info about the API_KEY
// You need a proper API_KEY for the requests to work
const API_KEY = NASA_API_KEY;

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://images-api.nasa.gov/search?q=mars%20rover&media_type=image`,
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState([]);

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(
        (response) => response.json(),
      );
      setRoverPhoto(roverPhotoResponse.collection.items);
    };

    fetchRoverPhotos();

    // 🧑🏽‍🚀 Task - Week 3
    // Fetch the extra data for NASA_URLs.astronomyPicOfTheDay and save it to the dailyImg state variable.

    const fetchDailyImg = async () => {
      const dailyImgResponse = await fetch(NASA_URLs.astronomyPicOfTheDay).then(
        (response) => response.json(),
      );
      setDailyImg(dailyImgResponse);
    };

    fetchDailyImg();
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the day</h2>
          {/* 🧑🏽‍🚀 Task - Week 3 */}
          {/* After fetching data from the NASA_URLs.astronomyPicOfTheDay url, display the returned data here. */}
          {/* You should display the title, explanation, and the image using the url from the response */}
          <div className={styles.dailyImg}>
            <img className={styles.nasaPicOfTheDayImg} src={dailyImg.url} />
            <div className={styles.imgInfo}>
              <h3>{dailyImg.title}</h3>
              <p>{dailyImg.explanation}</p>
            </div>
          </div>
        </section>
        <section className="card">
          <h2>Rover Photos</h2>

          {/* 🧑🏽‍🚀 Task - Week 3 */}
          {/* Iterate over the roverPhoto?.photos array and display all the pictures. */}
          {roverPhoto?.length > 0 ? (
            <>
              {roverPhoto.map((item) => (
                <RoverPhoto
                  key={item.data[0].nasa_id}
                  src={item.links[0].href}
                  date={item.data[0].date_created}
                  roverName={item.data[0].description}
                />
              ))}
              {/* 🧑🏽‍🚀 Task - Week 3 */}
              {/* Create a react component for the <RoverPhoto />, which should accept the following props: */}
              {/* 1. src: source of the img; */}
              {/* 2. date: earth_date data coming from the API; */}
              {/* 3. roverName: will be in the rover object. */}

              {/* If you don't know how the data looks like you can log it out to the console and investigate in the browser's devtools. */}
            </>
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
