

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.71d355c0.js","_app/immutable/chunks/scheduler.d8517fca.js","_app/immutable/chunks/index.1fa5a218.js","_app/immutable/chunks/singletons.c714c91e.js","_app/immutable/chunks/paths.2a471c11.js"];
export const stylesheets = [];
export const fonts = [];
