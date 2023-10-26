[custom-elements-ssr](../README.md) / [Modules](../modules.md) / [CustomElementRenderer](../modules/CustomElementRenderer.md) / CustomElementRender

# Class: CustomElementRender

[CustomElementRenderer](../modules/CustomElementRenderer.md).CustomElementRender

## Hierarchy

- `ElementRenderer`

  ↳ **`CustomElementRender`**

## Table of contents

### Constructors

- [constructor](CustomElementRenderer.CustomElementRender.md#constructor)

### Properties

- [\_attributes](CustomElementRenderer.CustomElementRender.md#_attributes)
- [element](CustomElementRenderer.CustomElementRender.md#element)
- [tagName](CustomElementRenderer.CustomElementRender.md#tagname)

### Accessors

- [shadowRootOptions](CustomElementRenderer.CustomElementRender.md#shadowrootoptions)

### Methods

- [attributeChangedCallback](CustomElementRenderer.CustomElementRender.md#attributechangedcallback)
- [connectedCallback](CustomElementRenderer.CustomElementRender.md#connectedcallback)
- [renderAttributes](CustomElementRenderer.CustomElementRender.md#renderattributes)
- [renderLight](CustomElementRenderer.CustomElementRender.md#renderlight)
- [renderShadow](CustomElementRenderer.CustomElementRender.md#rendershadow)
- [renderShadowCollected](CustomElementRenderer.CustomElementRender.md#rendershadowcollected)
- [renderSlots](CustomElementRenderer.CustomElementRender.md#renderslots)
- [setAttribute](CustomElementRenderer.CustomElementRender.md#setattribute)
- [setProperty](CustomElementRenderer.CustomElementRender.md#setproperty)
- [matchesClass](CustomElementRenderer.CustomElementRender.md#matchesclass)

## Constructors

### constructor

• **new CustomElementRender**(`tagName`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Overrides

ElementRenderer.constructor

#### Defined in

[src/CustomElementRenderer.ts:18](https://github.com/mash-graz/custom-elements-ssr/blob/55f317b/src/CustomElementRenderer.ts#L18)

## Properties

### \_attributes

• **\_attributes**: `Record`<`string`, `string`\>

#### Defined in

[src/CustomElementRenderer.ts:16](https://github.com/mash-graz/custom-elements-ssr/blob/55f317b/src/CustomElementRenderer.ts#L16)

___

### element

• **element**: `IHTMLCustomElement`

#### Overrides

ElementRenderer.element

#### Defined in

[src/CustomElementRenderer.ts:15](https://github.com/mash-graz/custom-elements-ssr/blob/55f317b/src/CustomElementRenderer.ts#L15)

___

### tagName

• **tagName**: `string`

#### Inherited from

ElementRenderer.tagName

#### Defined in

node_modules/.pnpm/@lit-labs+ssr@3.1.8/node_modules/@lit-labs/ssr/lib/element-renderer.d.ts:19

## Accessors

### shadowRootOptions

• `get` **shadowRootOptions**(): `ShadowRootInit`

The shadow root options to write to the declarative shadow DOM <template>,
if one is created with `renderShadow()`.

#### Returns

`ShadowRootInit`

#### Inherited from

ElementRenderer.shadowRootOptions

#### Defined in

node_modules/.pnpm/@lit-labs+ssr@3.1.8/node_modules/@lit-labs/ssr/lib/element-renderer.d.ts:83

## Methods

### attributeChangedCallback

▸ **attributeChangedCallback**(): `void`

#### Returns

`void`

#### Overrides

ElementRenderer.attributeChangedCallback

#### Defined in

[src/CustomElementRenderer.ts:43](https://github.com/mash-graz/custom-elements-ssr/blob/55f317b/src/CustomElementRenderer.ts#L43)

___

### connectedCallback

▸ **connectedCallback**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

ElementRenderer.connectedCallback

#### Defined in

[src/CustomElementRenderer.ts:39](https://github.com/mash-graz/custom-elements-ssr/blob/55f317b/src/CustomElementRenderer.ts#L39)

___

### renderAttributes

▸ **renderAttributes**(): `Generator`<`string`, `void`, `unknown`\>

#### Returns

`Generator`<`string`, `void`, `unknown`\>

#### Overrides

ElementRenderer.renderAttributes

#### Defined in

[src/CustomElementRenderer.ts:29](https://github.com/mash-graz/custom-elements-ssr/blob/55f317b/src/CustomElementRenderer.ts#L29)

___

### renderLight

▸ **renderLight**(): `Generator`<`string`, `void`, `unknown`\>

#### Returns

`Generator`<`string`, `void`, `unknown`\>

#### Overrides

ElementRenderer.renderLight

#### Defined in

[src/CustomElementRenderer.ts:45](https://github.com/mash-graz/custom-elements-ssr/blob/55f317b/src/CustomElementRenderer.ts#L45)

___

### renderShadow

▸ **renderShadow**(): `RenderResult`

#### Returns

`RenderResult`

#### Overrides

ElementRenderer.renderShadow

#### Defined in

[src/CustomElementRenderer.ts:49](https://github.com/mash-graz/custom-elements-ssr/blob/55f317b/src/CustomElementRenderer.ts#L49)

___

### renderShadowCollected

▸ **renderShadowCollected**(): `Generator`<`Promise`<`string`\>, `void`, `unknown`\>

#### Returns

`Generator`<`Promise`<`string`\>, `void`, `unknown`\>

#### Defined in

[src/CustomElementRenderer.ts:54](https://github.com/mash-graz/custom-elements-ssr/blob/55f317b/src/CustomElementRenderer.ts#L54)

___

### renderSlots

▸ **renderSlots**(`slots`): `Generator`<`string`, `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `slots` | `Record`<`string`, `string`\> |

#### Returns

`Generator`<`string`, `void`, `unknown`\>

#### Defined in

[src/CustomElementRenderer.ts:58](https://github.com/mash-graz/custom-elements-ssr/blob/55f317b/src/CustomElementRenderer.ts#L58)

___

### setAttribute

▸ **setAttribute**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Overrides

ElementRenderer.setAttribute

#### Defined in

[src/CustomElementRenderer.ts:25](https://github.com/mash-graz/custom-elements-ssr/blob/55f317b/src/CustomElementRenderer.ts#L25)

___

### setProperty

▸ **setProperty**(`name`, `value`): `void`

Handles setting a property on the element.

The default implementation sets the property on the renderer's element
instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of the property |
| `value` | `unknown` | Value of the property |

#### Returns

`void`

#### Inherited from

ElementRenderer.setProperty

#### Defined in

node_modules/.pnpm/@lit-labs+ssr@3.1.8/node_modules/@lit-labs/ssr/lib/element-renderer.d.ts:67

___

### matchesClass

▸ `Static` **matchesClass**(`_ceClass`, `_tagName`, `_attributes`): `boolean`

Should be implemented to return true when the given custom element class
and/or tagName should be handled by this renderer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_ceClass` | () => `HTMLElement` |
| `_ceClass.prototype` | `HTMLElement` |
| `_tagName` | `string` |
| `_attributes` | `AttributesMap` |

#### Returns

`boolean`

#### Inherited from

ElementRenderer.matchesClass

#### Defined in

node_modules/.pnpm/@lit-labs+ssr@3.1.8/node_modules/@lit-labs/ssr/lib/element-renderer.d.ts:29
