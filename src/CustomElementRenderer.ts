import { ElementRenderer } from '@lit-labs/ssr/lib/element-renderer.js';
import { RenderResult, collectResult } from '@lit-labs/ssr/lib/render-result';
import { escapeHtml } from '@lit-labs/ssr/lib/util/escape-html.js';
import * as parse5 from 'parse5';

interface IHTMLCustomElement extends HTMLElement{
  updateComplete: Promise<boolean>;
  connectedCallback(): void;
  disconnectedCallback(): void;
  adoptedCallback(): void;
  attributeChangedCallback(name: string, oldValue: any, newValue: any): void;
}

export class CustomElementRender extends ElementRenderer {
  declare element: IHTMLCustomElement;
  _attributes: Record<string, string>;

  constructor(tagName: string) {
    super(tagName);
    const ce_constructor = customElements.get(tagName);
    if (ce_constructor)
      this.element = new ce_constructor() as IHTMLCustomElement;
    this._attributes = {};
  }
  setAttribute(name: string, value: string) {
    this._attributes[name] = value;
    this.element.setAttribute(name, value);
  }
  *renderAttributes() {
    for (const [name, value] of Object.entries(this._attributes)) {
      if (value === '' || value === undefined || value === null) {
        yield ` ${name}`;
      }
      else {
        yield ` ${name}="${escapeHtml(value)}"`;
      }
    }
  }
  async connectedCallback() {
    this.element.connectedCallback();
    await this.element.updateComplete || Promise.resolve();
  }
  attributeChangedCallback() { }

  *renderLight() {
    yield this.element.innerHTML;
  }

  *renderShadow(): RenderResult {
    if (this.element.shadowRoot)
      yield this.element.shadowRoot.innerHTML;
  }

  *renderShadowCollected() {
      yield collectResult(this.renderShadow());
  }

  *renderSlots(slots: Record<string,string>) {
		for (let [slot, value = ''] of Object.entries(slots)) {
			if (slot !== 'default' && value) {
				// Parse the value as a concatenated string
				const fragment = parse5.parseFragment(`${value}`);

				// Add the missing slot attribute to child Element nodes
				for (const node of fragment.childNodes) {
					if ( node instanceof HTMLElement  && node.tagName && !node.attributes.getNamedItem('slot')) { //.some(({ name }) => name === 'slot')) {
						// node.attrs.push({ name: 'slot', value: slot });
            node.setAttribute('slot', slot);
					}
				}

				value = parse5.serialize(fragment);
			}

			yield value;
		}
	}
}