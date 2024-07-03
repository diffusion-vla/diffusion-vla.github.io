

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d2795bfb.js","_app/immutable/chunks/scheduler.df819399.js","_app/immutable/chunks/index.8f68d1ce.js","_app/immutable/chunks/singletons.fa8d2fb6.js","_app/immutable/chunks/paths.fa1f4929.js"];
export const stylesheets = [];
export const fonts = [];
