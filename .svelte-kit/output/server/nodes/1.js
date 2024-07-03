

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.3f5f400c.js","_app/immutable/chunks/scheduler.515cab41.js","_app/immutable/chunks/index.48b07e9e.js","_app/immutable/chunks/singletons.7e156044.js","_app/immutable/chunks/paths.d5b78076.js"];
export const stylesheets = [];
export const fonts = [];
