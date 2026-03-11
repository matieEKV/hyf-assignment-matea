//made an array of objects containing background and text color pairs. To be used to change the colors of the portfolio page randomly when button is clicked.

const colorThemes = [
  { background: "#2C3E50", text: "#ECF0F1" },
  { background: "#394648", text: "#F2EDD7" },
  { background: "#755139", text: "#ffffff" },
  { background: "#3b585c", text: "#FEFEDF" },
  { background: "#7B904B", text: "#000000" },
  { background: "#3D315B", text: "#F9F5FF" },
  { background: "#503c3c", text: "#f9f5ff" },
  { background: "#11217b", text: "#adffb4" },
  { background: "#a2db99", text: "#6b0000" },
  { background: "#e9c3cd", text: "#6b0059" },
];
let lastIndex;
//added an event listener to the button which will get a random color from the array and apply it to the html elements
document.getElementById("colorButton").addEventListener("click", () => {
  let index = getRandomIndex();

  //make sure themes do not repeat in a row
  while (index === lastIndex) {
    index = getRandomIndex();
  }

  lastIndex = index;
  const randomTheme = colorThemes[index];
  document.body.style.backgroundColor = randomTheme.background;
  document.documentElement.style.setProperty("--text-color", randomTheme.text); //link the randomly chosen text color to the css variable to be used for borders and the button
});

function getRandomIndex() {
  return Math.floor(Math.random() * colorThemes.length);
}
