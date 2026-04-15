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

  setAttributes(name, value) {
    this.domElement.setAttributes("name", name);
    this.domElement.setAttributes("value", value);
  }

  render(target) {
    super.render(target);
    this.setID();
  }
}
