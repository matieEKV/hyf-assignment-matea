import HTMLelement from "./HTMLelement.js";

export default class Button extends HTMLelement {
  constructor(className, text) {
    super("button", className, "textContent", text);
    this.className = className;
    this.text = text;
  }
  render(target) {
    super.render(target);
  }
}
