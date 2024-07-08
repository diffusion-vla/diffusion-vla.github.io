export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".nojekyll","architecture.jpg","code.svg","colab2.svg","documents.svg","eva.svg","framework.png","github-mark.svg","task_suite.png","videos/.DS_Store","videos/convert.sh","videos/framework.mp4","videos/generalization/.DS_Store","videos/generalization/background/.DS_Store","videos/generalization/background/deep_blue.mp4","videos/generalization/background/gray.mp4","videos/generalization/background/wooden.mp4","videos/generalization/background/yellow.mp4","videos/generalization/distractors/.DS_Store","videos/generalization/distractors/stack_cube.mp4","videos/generalization/distractors/stack_cubes_distractor.mp4","videos/generalization/distractors/transfer_bread.mp4","videos/generalization/distractors/transfer_bread_distractor.mp4","videos/generalization/instruction/.DS_Store","videos/generalization/instruction/hard.mp4","videos/generalization/instruction/middle.mp4","videos/generalization/instruction/simple.mp4","videos/generalization/instruction/simple_origin.mp4","videos/generalization/object_appearance/.DS_Store","videos/generalization/object_appearance/appearance_box_5.mp4","videos/generalization/object_appearance/appearance_mug_5.mp4","videos/generalization/object_appearance/box.mp4","videos/generalization/object_appearance/drawer2.mp4","videos/generalization/object_appearance/mug_5.mp4","videos/generalization/object_appearance/object_drawer_5.mp4","videos/generalization/object_appearance/object_mug_5.mp4","videos/generalization/view/.DS_Store","videos/generalization/view/left_+15_2.mp4","videos/generalization/view/left_-30_2.mp4","videos/generalization/view/left_orig.png","videos/generalization/view/right_+15_2.mp4","videos/generalization/view/right_-15_2.mp4","videos/generalization/view/right_orig.png","videos/origin_tasks/.DS_Store","videos/origin_tasks/box.mp4","videos/origin_tasks/box.png","videos/origin_tasks/convert.sh","videos/origin_tasks/drawer.png","videos/origin_tasks/drawer2.mp4","videos/origin_tasks/mug.mp4","videos/origin_tasks/mug.png","videos/origin_tasks/stack_cube.mp4","videos/origin_tasks/stack_cube.png","videos/origin_tasks/tennis.mp4","videos/origin_tasks/tennis.png","videos/origin_tasks/transfer_bread.mp4","videos/origin_tasks/transfer_bread.png","weights.svg"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".png":"image/png",".mp4":"video/mp4"},
	_: {
		client: {"start":"_app/immutable/entry/start.5086b291.js","app":"_app/immutable/entry/app.94223578.js","imports":["_app/immutable/entry/start.5086b291.js","_app/immutable/chunks/scheduler.d8517fca.js","_app/immutable/chunks/singletons.c714c91e.js","_app/immutable/chunks/paths.2a471c11.js","_app/immutable/entry/app.94223578.js","_app/immutable/chunks/scheduler.d8517fca.js","_app/immutable/chunks/index.1fa5a218.js"],"stylesheets":[],"fonts":[]},
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
