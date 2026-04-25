import HTMLelement from "./HTMLelement.js";

export default class Container extends HTMLelement {
  constructor(element, className) {
    super(element, className);
    this.element = element;
    this.className = className;
    this.text = null;
    this.type = null;
  }

  render(target) {
    super.render(target);
  }
}
