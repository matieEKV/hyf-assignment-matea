import Container from "./Container.js";
import Image from "./Image.js";
import Input from "./Input.js";
import Label from "./Label.js";

export default class ScreenshotCard {
  constructor(data) {
    this.id = data.screenshotData.id;
    this.image = data.screenshotData.image;
    this.url = data.screenshotData.url;
    this.container = new Container("div", "card-wrapper");
    this.createCard();
  }

  createCard() {
    const label = new Label("card-label", this.url, this.id);
    const input = new Input("card-input", this.id);
    const image = new Image("screenshot-img", this.image);

    this.container.render();
    label.render(this.container.domElement);
    input.render(label.domElement);
    image.render(label.domElement);
    console.log(this.image);
    input.setAttributes("checkbox", this.id, "card");
  }
}
