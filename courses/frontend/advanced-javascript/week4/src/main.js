import Button from "./htmlBlueprint/Button.js";
import Container from "./htmlBlueprint/Container.js";
import Heading from "./htmlBlueprint/Heading.js";
import Input from "./htmlBlueprint/Input.js";
import Label from "./htmlBlueprint/Label.js";

const heading = new Heading("h1", "heading", "Screenshot generator");
heading.render();

const submitButton = new Button("submitBtn", "Submit");
submitButton.render();

const inputContainer = new Container("div", "input-container");
inputContainer.render();

const inputEl = new Input("input", "input1");
inputEl.render(inputContainer.domElement);

const label = new Label("label", "insert URL", "input1");
label.render(inputContainer.domElement);
