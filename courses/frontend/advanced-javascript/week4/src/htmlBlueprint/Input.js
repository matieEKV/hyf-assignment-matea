import HTMLelement from "./HTMLelement.js";

export default class Input extends HTMLelement {
  constructor(className, id) {
    super("input", className, "textContent");
    this.className = className;
    this.text = null;
    this.id = id;
  }

  setID() {
    this.domElement.id = this.id;
  }
  render(target) {
    super.render(target);
    this.setID();
  }
}
