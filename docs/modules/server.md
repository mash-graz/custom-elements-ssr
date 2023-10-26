[custom-elements-ssr](../README.md) / [Modules](../modules.md) / server

# Module: server

## Table of contents

### Variables

- [default](server.md#default)

### Functions

- [check](server.md#check)
- [renderToStaticMarkup](server.md#rendertostaticmarkup)

## Variables

### default

• **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `check` | (`tag`: `string`) => `Promise`<`boolean`\> |
| `renderToStaticMarkup` | (`tag`: `any`, `attrs`: `any`, `children`: `Record`<`string`, `string`\>) => `Promise`<{ `html`: `string`  }\> |

#### Defined in

[src/server.ts:73](https://github.com/mash-graz/custom-elements-ssr/blob/55f317b/src/server.ts#L73)

## Functions

### check

▸ **check**(`tag`): `Promise`<`boolean`\>

A Check, if this plugin is responsible vor the given component
realized by lookup for a registered custom element of this kind

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/server.ts:16](https://github.com/mash-graz/custom-elements-ssr/blob/55f317b/src/server.ts#L16)

___

### renderToStaticMarkup

▸ **renderToStaticMarkup**(`tag`, `attrs`, `children`): `Promise`<{ `html`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `any` |
| `attrs` | `any` |
| `children` | `Record`<`string`, `string`\> |

#### Returns

`Promise`<{ `html`: `string`  }\>

#### Defined in

[src/server.ts:57](https://github.com/mash-graz/custom-elements-ssr/blob/55f317b/src/server.ts#L57)
