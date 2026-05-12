import { useState } from "react";
import styles from "./DestinationPage.module.css";

export const AddWishlistItem = ({ onAddWishlistItem }) => {
  const [thumbnail, setThumbnail] = useState("/destination/image-europa.png");
  const [customInput, setCustomInput] = useState("");

  const onAddItemPressed = () => {
    onAddWishlistItem(customInput, thumbnail);
    setCustomInput("");
  };

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor="customWishlist">Wishlist item name</label>
      <input
        id="customWishlist"
        type="text"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
      />
      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select
        id="customWishlistThumbnail"
        onClick={(e) => setThumbnail(e.target.value)}
      >
        <option value="/destination/image-europa.png">EUROPA</option>
        <option value="/destination/image-mars.png">MARS</option>
        <option value="/destination/image-moon.png">MOON</option>
        <option value="/destination/image-titan.png">TITAN</option>
      </select>
      <button
        onClick={onAddItemPressed}
        //add a check that disables the button if the input is empty or has only spaces
        style={{
          cursor: customInput.trim().length === 0 ? "not-allowed" : "pointer",
        }}
        disabled={customInput.trim().length === 0}
      >
        ADD CUSTOM
      </button>
    </div>
  );
};
