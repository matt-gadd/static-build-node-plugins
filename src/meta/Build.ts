import Base from '@dojo/framework/widget-core/meta/Base';
import Map from '@dojo/framework/shim/Map';

export class Build extends Base {
	private _runValueMap = new Map();
	public run(module: any, ...args: any[]) {
		const argsString = JSON.stringify(args);
		const value = this._runValueMap.get(argsString);
		if (value !== undefined) {
			return value;
		}

		this._runValueMap.set(argsString, null);
		const result = module(...args);
		if (typeof result.then === 'function') {
			result.then((result: any) => {
				this._runValueMap.set(argsString, result);
				this.invalidate();
			});
			return null;
		}
		return result;
	}
}

export default Build;
