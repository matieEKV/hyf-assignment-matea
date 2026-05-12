import styles from "./DestinationPage.module.css";
import { PlanetCard } from "../../components/PlanetCard.jsx";
import { AddWishlistItem } from "./AddWishlistItem";
import { PlanetsWishlistItem } from "./PlanetsWishlistItem";
import Planets from "./planets.jsx";
import { usePlanetContext } from "../../../src/context/PlanetsContext.jsx";

export const Destinations = () => {
  const {
    planetsWishlist,
    addPlanetToWishlist,
    isPlanetInWishlist,
    removePlanetFromWishlist,
    wishlistCount,
  } = usePlanetContext();

  const togglePlanetSelection = (name, thumbnail) => {
    isPlanetInWishlist(name)
      ? removePlanetFromWishlist(name)
      : addPlanetToWishlist(name, thumbnail);
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>

          {wishlistCount === 0 ? (
            <p>No planets in your wishlist :(</p>
          ) : (
            <p>You have {wishlistCount} planets in your wishlist</p>
          )}
          <AddWishlistItem onAddWishlistItem={addPlanetToWishlist} />

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
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {Planets.map((planet) => {
            return (
              <PlanetCard
                key={planet.name}
                name={planet.name}
                description={planet.description}
                thumbnail={planet.thumbnail}
                isSelected={isPlanetInWishlist(planet.name)}
                togglePlanetSelection={() =>
                  togglePlanetSelection(planet.name, planet.thumbnail)
                }
              />
            );
          })}
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
