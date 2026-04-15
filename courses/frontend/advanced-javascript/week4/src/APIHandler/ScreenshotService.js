import { RAPID_API_KEY } from "../../secret.js";

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
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.screenshotUrl);
    return result.screenshotUrl;
  } catch (error) {
    console.error(error);
  }
}

async function storeScreenshot(url, imageUrl) {
  const CRUD =
    "https://crudcrud.com/api/43360d3a600f467791ec330561a691bf/screenshot";
  const response = await fetch(CRUD, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url, imageUrl }),
  });
  if (!response.ok)
    //throw an error
    return response.json();
}

export { getScreenshot, storeScreenshot };
