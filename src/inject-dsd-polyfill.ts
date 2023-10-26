/**
 * Rollup/Vite plugin injecting the DSD-polyfill
 * 
 * This is a workaround to by bypass some issues related
 * to vites limited asset handling (no file emit in lib mode) 
 * and the fact, that endusers may overwrite those settings, 
 * required for utilizing the import ...?url mechanism.   
 */

import dsd_polyfill_raw from '../dist/dsd-polyfill.js?raw';
import dsd_polyfill_map_raw from '../dist/dsd-polyfill.js.map?raw';
import type { ResolvedConfig, Plugin } from 'vite'

export default function inject_dsd_polyfill() {

    let config: ResolvedConfig;

    const plugin: Plugin = {
        name: 'inject-dsd-polyfill',

        configResolved(resolvedConfig: ResolvedConfig) {
            config = resolvedConfig;
            // console.log(config);
        },


        load(id: string) {
            if (id === '/dsd-polyfill.js') {
                return dsd_polyfill_raw;
            }
            if (id === '/dsd-polyfill.js.map') {
                return dsd_polyfill_map_raw;
            }
        },
        buildStart() {
            if (config.command !== 'serve') {
                this.emitFile({
                    type: 'prebuilt-chunk',
                    fileName: 'dsd-polyfill.js',
                    code: dsd_polyfill_raw
                });
                this.emitFile({
                    type: 'prebuilt-chunk',
                    fileName: 'dsd-polyfill.js.map',
                    code: dsd_polyfill_map_raw
                });
            }
        }
    };
    return plugin;
}