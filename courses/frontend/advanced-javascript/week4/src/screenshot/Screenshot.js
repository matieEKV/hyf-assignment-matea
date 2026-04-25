export default class Screenshot {
  constructor(id, url, imageUrl) {
    this.screenshotData = {
      id: id,
      url: url,
      image: imageUrl,
    };
  }
}
