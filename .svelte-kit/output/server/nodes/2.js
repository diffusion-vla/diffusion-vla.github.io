

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.10b7d99d.js","_app/immutable/chunks/scheduler.d8517fca.js","_app/immutable/chunks/index.1fa5a218.js","_app/immutable/chunks/paths.2a471c11.js"];
export const stylesheets = ["_app/immutable/assets/2.f051e1d0.css"];
export const fonts = [];
