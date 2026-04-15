import HTMLelement from "./HTMLelement.js";

export default class Label extends HTMLelement {
  constructor(className, text, inputID) {
    super("label", className, "innerText", text);
    this.className = className;
    this.text = text;
    this.inputID = inputID;
  }

  setAttribute() {
    this.domElement.htmlFor = this.inputID;
  }

  render(target) {
    super.render(target);
    this.setAttribute();
  }
}
