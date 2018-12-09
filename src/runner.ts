import Map from '@dojo/framework/shim/Map';

export const runner = (invalidator: any) => {
	const runValueMap = new Map();
	return function (module: any, ...args: any[]) {
		const argsString = JSON.stringify(args);
		const value = runValueMap.get(argsString);
		if (value !== undefined) {
			return value;
		}

		runValueMap.set(argsString, null);
		const result = module(...args);
		if (typeof result.then === 'function') {
			result.then((result: any) => {
				runValueMap.set(argsString, result);
				invalidator();
			});
			return null;
		}
		return result;
	}
}

export default runner;
