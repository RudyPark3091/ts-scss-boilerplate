import $ from "./App.module.scss";

type AppProps = {
	parent: HTMLDivElement;
	root?: HTMLDivElement;
};

export const App = (props: AppProps) => {
	const container = document.createElement("div");
	container.className = $.container;
	container.innerHTML =
		`edit <span class="${$.red}">src/App.ts</span> to make your own Application`;

	const gooeyFilter = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display:none">
	<defs>
		<filter id="goo">
			<feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
			<feColorMatrix
				in="blur"
				mode="matrix"
				values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 200 -7"
				result="goo"
			/>
			<feComposite in="SourceGraphic" in2="goo" />
		</filter>
	</defs>
</svg>`
	props.parent.innerHTML += gooeyFilter;

	const spinners = document.createElement("div");
	spinners.className = $.spinners;

	const spinner1 = document.createElement("div");
	const spinner2 = document.createElement("div");
	const spinner3 = document.createElement("div");
	const spinner4 = document.createElement("div");

	const tip = document.createElement("div");
	tip.className = $.spinner__tip;

	const spinnerElems = [
		spinner1,
		spinner2,
		spinner3,
		spinner4,
	]
	spinnerElems.forEach((elem) => {
		elem.className = $.spinner
		elem.appendChild(tip.cloneNode());
		spinners.appendChild(elem);
	});

	props.parent.appendChild(spinners);

	return container;
}
