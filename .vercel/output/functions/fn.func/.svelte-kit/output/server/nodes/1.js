

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1ff4b19a.js","_app/immutable/chunks/scheduler.f6bc9b23.js","_app/immutable/chunks/index.dcf1775c.js","_app/immutable/chunks/singletons.b82fc86e.js"];
export const stylesheets = [];
export const fonts = [];
