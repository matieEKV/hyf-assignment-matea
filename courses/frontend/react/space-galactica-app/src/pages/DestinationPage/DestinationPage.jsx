import { useState } from "react";
import styles from "./DestinationPage.module.css";
import { PlanetCard } from "../../components/PlanetCard.jsx";
import { AddWishlistItem } from "./AddWishlistItem";
import { PlanetsWishlistItem } from "./PlanetsWishlistItem";

export const Destinations = () => {
  const [planetsWishlist, setPlanetsWishlist] = useState([]);

  const isPlanetInWishlist = (planetName) => {
    return planetsWishlist.some((planet) => planet.name === planetName);
  };

  const togglePlanetSelection = (name, thumbnail) => {
    isPlanetInWishlist(name)
      ? removePlanetFromWishlist(name)
      : addPlanetToWishlist(name, thumbnail);
  };

  const addPlanetToWishlist = (name, thumbnail) => {
    setPlanetsWishlist([
      ...planetsWishlist,
      {
        name: name,
        thumbnail: thumbnail,
      },
    ]);
  };
  const removePlanetFromWishlist = (name) => {
    setPlanetsWishlist(
      planetsWishlist.filter((planet) => planet.name !== name),
    );
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>

          {planetsWishlist.length === 0 ? (
            <p>No planets in your wishlist :(</p>
          ) : (
            <p>You have {planetsWishlist.length} planets in your wishlist</p>
          )}
          <AddWishlistItem onAddWishlistItem={addPlanetToWishlist} />
          {/* 🧑🏽‍🚀 Task - Week 3 */}
          {/* Use the AddWishlistItem component here. */}

          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            {planetsWishlist.map((item) => (
              <PlanetsWishlistItem
                key={item.name}
                name={item.name}
                thumbnail={item.thumbnail}
                onRemove={removePlanetFromWishlist}
              />
            ))}
          </div>
          {/* 🧑🏽‍🚀 Task - Week 3
         
            ...
            Use .map() to display the wishlist planets with the PlanetsWishlistItem component. 
          </div> 
          */}
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          <PlanetCard
            name="EUROPA"
            description="Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers."
            thumbnail="/destination/image-europa.png"
            isSelected={isPlanetInWishlist("Europa")}
            togglePlanetSelection={() =>
              togglePlanetSelection("Europa", "/destination/image-europa.png")
            }
          />
          <PlanetCard
            name="MARS"
            description="Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth."
            thumbnail="/destination/image-mars.png"
            isSelected={isPlanetInWishlist("Mars")}
            togglePlanetSelection={() =>
              togglePlanetSelection("Mars", "/destination/image-mars.png")
            }
          />
          <PlanetCard
            name="MOON"
            description="Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers."
            thumbnail="/destination/image-moon.png"
            isSelected={isPlanetInWishlist("Moon")}
            togglePlanetSelection={() =>
              togglePlanetSelection("Moon", "/destination/image-moon.png")
            }
          />
          <PlanetCard
            name="TITAN"
            description="Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets."
            thumbnail="/destination/image-titan.png"
            isSelected={isPlanetInWishlist("Titan")}
            togglePlanetSelection={() =>
              togglePlanetSelection("Titan", "/destination/image-titan.png")
            }
          />
        </section>
      </main>
    </div>
  );
};

export default Destinations;

// 🧑🏽‍🚀 Task - Week 4 - part 2
// Hate to break it to you, but you will have to make some changes to the code you already wrote.
// Now that you have context, grab and use the context data in this.
// You will need to replace some of the variables and functions with the ones from the context.
