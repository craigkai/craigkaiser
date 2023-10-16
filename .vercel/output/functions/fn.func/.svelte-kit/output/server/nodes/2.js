

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.7982a088.js","_app/immutable/chunks/scheduler.f6bc9b23.js","_app/immutable/chunks/index.dcf1775c.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/2.85214208.css"];
export const fonts = [];
