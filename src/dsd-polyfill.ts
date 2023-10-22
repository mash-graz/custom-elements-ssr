function process_dsd(root: HTMLElement | ShadowRoot) {
	// console.log("DSR polyfill processing...");
	root.querySelectorAll("template[shadowrootmode]")
		.forEach(template => {
			const mode: ShadowRootMode = template.getAttribute("shadowrootmode") === "closed" ? "closed" : "open";
			const shadowRoot = (<HTMLTemplateElement>template.parentNode).attachShadow({ mode });
			shadowRoot.appendChild((<HTMLTemplateElement>template).content);
			template.remove();
			process_dsd(shadowRoot);
		});
}

function install_polyfill_handler() {
	// console.log("install DSR polyfill handler...")
	if (document.readyState === "loading") {
		window.addEventListener('DOMContentLoaded', () => process_dsd(document.body), {
			once: true,
		});
	} else {
		// `DOMContentLoaded` has already fired
		process_dsd(document.body);
	}
}


if (!HTMLTemplateElement.prototype.hasOwnProperty('shadowRootMode')) {
	install_polyfill_handler();
}
