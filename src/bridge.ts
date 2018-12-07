import has from '@dojo/framework/has/has';
declare const modulePath: string;
const __CACHE__: any = {};
/** INSERT_CACHE **/
export default (...args: any[]) => {
	if (has('build-time-render')) {
		return (window as any).__communicator(modulePath, args);
	}
	else {
		return __CACHE__[JSON.stringify(args)];
	}
}
