export default class HTMLelement {
  constructor(element, className, type, text) {
    this.element = element;
    this.className = className;
    this.type = type;
    this.text = text;
    this.domElement = null;
  }

  createElements() {
    if (!this.domElement) {
      this.domElement = document.createElement(this.element);
      this.domElement.classList.add(this.className);
    }
  }

  setContent() {
    this.domElement[this.type] = this.text;
  }

  render(appendTo) {
    this.createElements();
    this.setContent();
    if (appendTo) {
      appendTo.append(this.domElement);
    } else {
      document.body.append(this.domElement);
    }
  }
}
