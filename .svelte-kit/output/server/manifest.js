export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","architecture.jpg","card.jpg","code.svg","colab2.svg","documents.svg","exp_setups.jpg","github-mark.svg","octo.png","paper.pdf","sampling_weights.jpg","teaser.jpg","videos/convert.sh","videos/out_aloha.jpg","videos/out_aloha.mp4","videos/out_bridge.jpg","videos/out_bridge.mp4","videos/out_cmu.jpg","videos/out_cmu.mp4","videos/out_fmb.jpg","videos/out_fmb.mp4","videos/out_google.jpg","videos/out_google.mp4","videos/out_google_octo.jpg","videos/out_google_octo.mp4","videos/out_google_rt1.jpg","videos/out_google_rt1.mp4","videos/out_google_rt2.jpg","videos/out_google_rt2.mp4","videos/out_iliad.jpg","videos/out_iliad.mp4","videos/out_ours_ur5_cloth.jpg","videos/out_ours_ur5_cloth.mp4","videos/out_ours_ur5_tiger.jpg","videos/out_ours_ur5_tiger.mp4","videos/out_rpt.jpg","videos/out_rpt.mp4","videos/out_rpt_octo.jpg","videos/out_rpt_octo.mp4","videos/out_rpt_scratch.jpg","videos/out_rpt_scratch.mp4","videos/out_rpt_vc1.jpg","videos/out_rpt_vc1.mp4","videos/out_rt1_bridge.jpg","videos/out_rt1_bridge.mp4","videos/out_rt1_ur5_cloth.jpg","videos/out_rt1_ur5_cloth.mp4","videos/out_rt1_ur5_tiger.jpg","videos/out_rt1_ur5_tiger.mp4","videos/out_ur5.jpg","videos/out_ur5.mp4","weights.svg"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".png":"image/png",".pdf":"application/pdf",".mp4":"video/mp4"},
	_: {
		client: {"start":"_app/immutable/entry/start.a9663213.js","app":"_app/immutable/entry/app.de36c307.js","imports":["_app/immutable/entry/start.a9663213.js","_app/immutable/chunks/scheduler.df819399.js","_app/immutable/chunks/singletons.fa8d2fb6.js","_app/immutable/chunks/paths.fa1f4929.js","_app/immutable/entry/app.de36c307.js","_app/immutable/chunks/scheduler.df819399.js","_app/immutable/chunks/index.8f68d1ce.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
