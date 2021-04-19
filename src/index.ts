import "./styles/style.module.scss";
import { App } from "./App";

const style = document.createElement("style");
style.innerText = `#app {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
`;
document.head.appendChild(style);

const root = document.querySelector("#app")!;
root.appendChild(
	App({
		parent: root as HTMLDivElement,
	})
);
