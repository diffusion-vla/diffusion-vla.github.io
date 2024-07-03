

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.a5183d67.js","_app/immutable/chunks/scheduler.df819399.js","_app/immutable/chunks/index.8f68d1ce.js","_app/immutable/chunks/paths.fa1f4929.js"];
export const stylesheets = ["_app/immutable/assets/2.ccce21b9.css"];
export const fonts = [];
