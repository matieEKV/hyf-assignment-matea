import Container from "./Container.js";
import Input from "./Input.js";
import Label from "./Label.js";

export default class ScreenshotCard {
  constructor(data) {
    this.id = data._id;
    this.url = data.imageUrl;
    this.container = new Container("div", "card-wrapper");
    this.createCard();
  }

  createCard() {
    const label = new Label("card-label", this.url, card);
    const input = new Input("card-input", "card");
    input.setAttributes("name", this.ID);
    this.container.render();
    input.render();
    label.render();
  }
}
