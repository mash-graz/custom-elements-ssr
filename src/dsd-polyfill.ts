/**
 * Polyfill for Declarative Shadow DOM handling
 * 
 * This module will check the DSD support of the utilized browser
 * and install polyfill handlers for additional processing if needed.
 * 
 * @remark You may utilize the `"module"` attribute of HTML 
 * `<script …>`-tags to prevent multiply loading of this 
 * polyfill if it appears more than once in the page source.
 * 
 * @module
 */

/**
 * Search for all DSD templates and replace them by shadow DOM nodes
 * in a recursive manner.
 * 
 * @param root Root node of search and replacement process 
 *  
 * @see [Polyfill](https://developer.chrome.com/articles/declarative-shadow-dom/#polyfill)
 */
export function process_dsd(root: HTMLElement | ShadowRoot) {
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

/**
 * 
 * Installs an event handler to swap all DSD templates for 
 * shadow DOM nodes as soon as the page was loaded.
 *
 * @see [Polyfill](https://developer.chrome.com/articles/declarative-shadow-dom/#polyfill)
 * 
 */
export function install_polyfill_handler() {
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

/**
 * Test if this particular browser supports Declarative Shadow DOM
 * 
 * @returns 
 * - `true`: Declarative shadow DOM support is provided 
 *   out of the box.
 * - `false`: Customized handling of declarative shadow DOM 
 *   is needed.
 * 
 * @see [Feature detection and browser support](https://developer.chrome.com/articles/declarative-shadow-dom/#feature-detection-and-browser-support)
 */
export function dsd_available(): boolean {
	return HTMLTemplateElement.prototype.hasOwnProperty('shadowRootMode');
}

if (!dsd_available()) {
	install_polyfill_handler();
}
