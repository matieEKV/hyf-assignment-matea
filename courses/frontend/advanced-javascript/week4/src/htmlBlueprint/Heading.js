import HTMLelement from "./HTMLelement.js";

export default class Heading extends HTMLelement {
  constructor(element, className, text) {
    super(element, className, "textContent", text);
    this.element = element;
    this.className = className;
    this.text = text;
  }

  render(target) {
    super.render(target);
  }
}
