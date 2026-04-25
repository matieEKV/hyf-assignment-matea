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

  setAttributes(type, value, name) {
    this.domElement.setAttribute("type", type);
    this.domElement.setAttribute("value", value);
    this.domElement.setAttribute("name", name);
  }

  render(target) {
    super.render(target);
    this.setID();
  }
}
