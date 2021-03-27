export default class App {
  target: HTMLElement;
  container: HTMLElement;

  constructor(target: HTMLElement) {
    this.target = target;
    this.container = document.createElement("div");
    this.container.innerText = "Hello World";
  }

  render() {
    this.target.appendChild(this.container);
  }
}
