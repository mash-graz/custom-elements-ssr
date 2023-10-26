[custom-elements-ssr](../README.md) / [Modules](../modules.md) / dsd-polyfill

# Module: dsd-polyfill

Polyfill for Declarative Shadow DOM handling

This module will check the DSD support of the utilized browser
and install polyfill handlers for additional processing if needed.

**`Remark`**

You may utilize the `"module"` attribute of HTML 
`<script …>`-tags to prevent multiply loading of this 
polyfill if it appears more than once in the page source.

## Table of contents

### Functions

- [dsd\_available](dsd_polyfill.md#dsd_available)
- [install\_polyfill\_handler](dsd_polyfill.md#install_polyfill_handler)
- [process\_dsd](dsd_polyfill.md#process_dsd)

## Functions

### dsd\_available

▸ **dsd_available**(): `boolean`

Test if this particular browser supports Declarative Shadow DOM

#### Returns

`boolean`

- `true`: Declarative shadow DOM support is provided 
  out of the box.
- `false`: Customized handling of declarative shadow DOM 
  is needed.

**`See`**

[Feature detection and browser support](https://developer.chrome.com/articles/declarative-shadow-dom/#feature-detection-and-browser-support)

#### Defined in

[src/dsd-polyfill.ts:65](https://github.com/mash-graz/custom-elements-ssr/blob/55f317b/src/dsd-polyfill.ts#L65)

___

### install\_polyfill\_handler

▸ **install_polyfill_handler**(): `void`

Installs an event handler to swap all DSD templates for 
shadow DOM nodes as soon as the page was loaded.

#### Returns

`void`

**`See`**

[Polyfill](https://developer.chrome.com/articles/declarative-shadow-dom/#polyfill)

#### Defined in

[src/dsd-polyfill.ts:42](https://github.com/mash-graz/custom-elements-ssr/blob/55f317b/src/dsd-polyfill.ts#L42)

___

### process\_dsd

▸ **process_dsd**(`root`): `void`

Search for all DSD templates and replace them by shadow DOM nodes
in a recursive manner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `root` | `HTMLElement` \| `ShadowRoot` | Root node of search and replacement process |

#### Returns

`void`

**`See`**

[Polyfill](https://developer.chrome.com/articles/declarative-shadow-dom/#polyfill)

#### Defined in

[src/dsd-polyfill.ts:22](https://github.com/mash-graz/custom-elements-ssr/blob/55f317b/src/dsd-polyfill.ts#L22)
