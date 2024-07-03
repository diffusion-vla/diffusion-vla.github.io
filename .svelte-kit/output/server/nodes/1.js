

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.31500fd1.js","_app/immutable/chunks/scheduler.df819399.js","_app/immutable/chunks/index.8f68d1ce.js","_app/immutable/chunks/singletons.21f3c7cd.js","_app/immutable/chunks/paths.72a968ff.js"];
export const stylesheets = [];
export const fonts = [];
