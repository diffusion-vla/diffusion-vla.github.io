export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".nojekyll","architecture.jpg","card.jpg","code.svg","colab2.svg","documents.svg","eva.svg","exp_setups.jpg","framework.png","github-mark.svg","octo.png","paper.pdf","sampling_weights.jpg","videos/.DS_Store","videos/convert.sh","videos/origin_tasks/.DS_Store","videos/origin_tasks/box.mp4","videos/origin_tasks/box.png","videos/origin_tasks/convert.sh","videos/origin_tasks/drawer.png","videos/origin_tasks/drawer2.mp4","videos/origin_tasks/mug.mp4","videos/origin_tasks/mug.png","videos/origin_tasks/stack_cube.mp4","videos/origin_tasks/stack_cube.png","videos/origin_tasks/tennis.mp4","videos/origin_tasks/tennis.png","videos/origin_tasks/transfer_bread.mp4","videos/origin_tasks/transfer_bread.png","weights.svg"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".png":"image/png",".pdf":"application/pdf",".mp4":"video/mp4"},
	_: {
		client: {"start":"_app/immutable/entry/start.1883029c.js","app":"_app/immutable/entry/app.b415dc64.js","imports":["_app/immutable/entry/start.1883029c.js","_app/immutable/chunks/scheduler.515cab41.js","_app/immutable/chunks/singletons.7e156044.js","_app/immutable/chunks/paths.d5b78076.js","_app/immutable/entry/app.b415dc64.js","_app/immutable/chunks/scheduler.515cab41.js","_app/immutable/chunks/index.48b07e9e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
