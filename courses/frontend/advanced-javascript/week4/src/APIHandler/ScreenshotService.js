import { RAPID_API_KEY, CRUD_ENDPOINT } from "../../secret.js";
import ApiError from "../Errors/APIerror.js";

async function getScreenshot(encodedURL) {
  const inputURL = encodedURL;
  const url = `https://website-screenshot6.p.rapidapi.com/screenshot?url=${inputURL}&width=1920&height=1080`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": RAPID_API_KEY,
      "x-rapidapi-host": "website-screenshot6.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new ApiError("Failed to take a screenshot", response);
  }

  const screenshot = await response.json();
  return screenshot.screenshotUrl;
  // const blob = await response.blob();
  // return URL.createObjectURL(blob); // use as <img src>
}

async function storeScreenshot(url, imageUrl) {
  const CRUD = CRUD_ENDPOINT;
  const response = await fetch(CRUD, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url, imageUrl }),
  });
  if (!response.ok) {
    throw new ApiError("Screenshot saving failed", response);
  }
  return response.json();
}

async function deleteFromCrudCrud(id) {
  const CRUD = `https://crudcrud.com/api/efd7172c4a814691a3225afbf6d0e5ca/screenshot/${id}`;
  const response = await fetch(CRUD, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new ApiError("Screenshot not deleted", response);
  }
  return true;
}

export { getScreenshot, storeScreenshot, deleteFromCrudCrud };
