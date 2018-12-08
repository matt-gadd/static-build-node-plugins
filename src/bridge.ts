import has from '@dojo/framework/has/has';
declare const modulePath: string;
(window as any).__cache = (window as any).__cache || {};
(window as any).__cache[modulePath] = {};
/** @preserve __cache **/
export default (...args: any[]) => {
	if (has('build-time-render')) {
		return (window as any).__communicator(modulePath, args);
	}
	else {
		return (window as any).__cache[modulePath][JSON.stringify(args)];
	}
}
