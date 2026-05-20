import { useState, createContext, useContext } from "react";

export const PlanetContext = createContext(null);

export function PlanetContextProvider({ children }) {
  const [planetsWishlist, setPlanetsWishlist] = useState([]);

  const addPlanetToWishlist = (name, thumbnail) => {
    setPlanetsWishlist([
      ...planetsWishlist,
      {
        name,
        thumbnail,
      },
    ]);
  };
  const isPlanetInWishlist = (planetName) => {
    return planetsWishlist.some((planet) => planet.name === planetName);
  };

  const removePlanetFromWishlist = (name) => {
    setPlanetsWishlist(
      planetsWishlist.filter((planet) => planet.name !== name),
    );
  };

  const wishlistCount = planetsWishlist.length;

  return (
    <PlanetContext.Provider
      value={{
        planetsWishlist,
        addPlanetToWishlist,
        isPlanetInWishlist,
        removePlanetFromWishlist,
        wishlistCount,
      }}
    >
      {" "}
      {children}
    </PlanetContext.Provider>
  );
}

export function usePlanetContext() {
  return useContext(PlanetContext);
}
