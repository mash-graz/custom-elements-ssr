[custom-elements-ssr](../README.md) / [Modules](../modules.md) / inject-dsd-polyfill

# Module: inject-dsd-polyfill

Rollup/Vite plugin injecting the DSD-polyfill

This is a workaround to by bypass some issues related
to vites limited asset handling (no file emit in lib mode)
and the fact, that endusers may overwrite those settings,
required for utilizing the `import ...?url` mechanism.

The injected polyfill and mapfile are located at the URLs:  
`/dsd-polyfill.js` and `/dsd-polyfill.js.map`

## Table of contents

### Functions

- [default](inject_dsd_polyfill.md#default)

## Functions

### default

▸ **default**(): `Plugin_2`

#### Returns

`Plugin_2`

#### Defined in

[src/inject-dsd-polyfill.ts:19](https://github.com/mash-graz/custom-elements-ssr/blob/55f317b/src/inject-dsd-polyfill.ts#L19)
