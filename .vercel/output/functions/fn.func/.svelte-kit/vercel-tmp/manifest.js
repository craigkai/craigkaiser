export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","home/background-home-desktop.jpg","home/background-home-mobile.jpg","home/background-home-tablet.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.0e943106.js","app":"_app/immutable/entry/app.b3e06cb6.js","imports":["_app/immutable/entry/start.0e943106.js","_app/immutable/chunks/scheduler.f6bc9b23.js","_app/immutable/chunks/singletons.b82fc86e.js","_app/immutable/entry/app.b3e06cb6.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.f6bc9b23.js","_app/immutable/chunks/index.dcf1775c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
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
