import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.2a8ad3d0.js","_app/immutable/chunks/scheduler.f6bc9b23.js","_app/immutable/chunks/index.dcf1775c.js"];
export const stylesheets = ["_app/immutable/assets/0.41a3dc1e.css"];
export const fonts = [];
