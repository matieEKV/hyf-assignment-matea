export default class Image {
  constructor(className, src) {
    this.element = "img";
    this.className = className;
    this.src = src;
    this.domElement = null;
  }

  render(target) {
    this.domElement = document.createElement(this.element);
    this.domElement.classList.add(this.className);
    this.domElement.setAttribute("src", this.src);
    if (target) {
      target.append(this.domElement);
    } else {
      document.body.append(this.domElement);
    }
  }
}
