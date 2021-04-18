import "./styles/style.module.scss";
import { App } from "./App";

const style = document.createElement("style");
style.innerText = `#app {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.hello {
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	font-size: 3rem;
	font-weight: 900;
}
`;
document.head.appendChild(style);

const target = document.querySelector("#app")!;
target.innerHTML += `<div class="hello">Hello world!</div>`;
target.appendChild(
	App({
		parent: target as HTMLDivElement,
	})
);
