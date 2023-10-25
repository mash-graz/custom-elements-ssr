import '../server-shim.js';
import { DOMParser } from 'linkedom';

// import { GlobalRegistrator } from '@happy-dom/global-registrator';
// import { DOMParser } from 'happy-dom';

import { CustomElementRender } from './CustomElementRenderer.js';
import dsd_polyfill_url from 'custom-elements-ssr/dsd-polyfill.js?url';
// const dsd_polyfill_url = new URL('./dsd-polyfill.js', import.meta.url).href;
//const dsd_polyfill_url = 'custom-elements-ssr/dsd-polyfill.js';

console.log('DSD_POLYFILL_URL:', dsd_polyfill_url); 

/**
 * A Check, if this plugin is responsible vor the given component
 * realized by lookup for a registered custom element of this kind
 * 
 * @param tag 
 * @returns 
 */
export async function check(tag: string): Promise<boolean> {
  return !!customElements.get(tag);
}

async function* render(
  tag: any,
  attrs: Record<string,string>,
  children: Record<string, string>
) {

  const instance = new CustomElementRender(tag);

  Object.entries(attrs).forEach(([k, v]) => {
    instance.setAttribute(k, v);
  });

  if (children) {
    const nodes = new DOMParser().parseFromString(children[0], 'text/html').childNodes;
    instance.element.append(...nodes);
  }

  instance?.connectedCallback?.();

  yield `<${tag}`;
  yield* instance.renderAttributes();
  yield `>`;
  const shadowContents = instance.renderShadowCollected();
  const shadow_content_top = await shadowContents?.next().value;
  if (shadow_content_top) {
    yield '<template shadowrootmode="open">';
    yield shadow_content_top;
    yield* shadowContents;
    yield '</template>';
    yield `<script type="module" src="${dsd_polyfill_url}"></script>`;
  }
  if (children)
    yield* instance.renderSlots(children);
  yield* instance.renderLight();
  yield `</${tag}>`;
}

export async function renderToStaticMarkup(
  tag: any, 
  attrs: any, 
  children: Record<string, string>
  ) {

  // console.log('CHILDREN:', children);

  let html = '';
  for await (let chunk of render(tag, attrs, children)) {
    html += chunk;
  }

  return { html };
}

export default {
  check, 
  renderToStaticMarkup
}
