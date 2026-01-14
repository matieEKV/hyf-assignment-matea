console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

// This should create the ul and the li's with the individual products details
function renderProducts(products) {
  const main = document.querySelector("main");

  const ul = document.createElement("ul");
  main.appendChild(ul);

  for (const product of products) {
    //create a card that holds each product
    const infoCard = document.createElement("div");
    ul.appendChild(infoCard);

    //create a same legend for each product within the card
    const legend = document.createElement("section");
    legend.classList.add("tag");
    infoCard.appendChild(legend);

    //create same section for the product data within the card
    const dataSection = document.createElement("section");
    dataSection.classList.add("data");
    infoCard.appendChild(dataSection);

    //create 3 p elements that will have the legend for the data
    const l1 = document.createElement("p");
    l1.classList.add("tag");
    l1.textContent = "Name: ";
    legend.appendChild(l1);
    const l2 = document.createElement("p");
    l2.classList.add("tag");
    l2.textContent = "Price: ";
    legend.appendChild(l2);
    const l3 = document.createElement("p");
    l3.classList.add("tag");
    l3.textContent = "Rating: ";
    legend.appendChild(l3);

    //create li elements for product data
    const name = document.createElement("li");
    dataSection.appendChild(name);
    const price = document.createElement("li");
    dataSection.appendChild(price);
    const rating = document.createElement("li");
    dataSection.appendChild(rating);

    //attach data to their respective holder on the card
    name.innerHTML = product.name;
    price.innerHTML = product.price;
    rating.innerHTML = product.rating;
  }
}

renderProducts(products);
