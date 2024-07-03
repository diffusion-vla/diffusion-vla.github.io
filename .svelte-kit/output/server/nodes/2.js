

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.c9013488.js","_app/immutable/chunks/scheduler.515cab41.js","_app/immutable/chunks/index.48b07e9e.js","_app/immutable/chunks/paths.d5b78076.js"];
export const stylesheets = ["_app/immutable/assets/2.96661c7c.css"];
export const fonts = [];
