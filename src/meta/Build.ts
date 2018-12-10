import Base from '@dojo/framework/widget-core/meta/Base';
import Map from '@dojo/framework/shim/Map';
import WeakMap from '@dojo/framework/shim/WeakMap';

export class Build extends Base {
	private _moduleMap = new WeakMap();
	public run(module: any) {
		return (...args: any[]) => {
			let valueMap = this._moduleMap.get(module);
			if (!valueMap) {
				valueMap = new Map();
				this._moduleMap.set(module, valueMap);
			}
			const argsString = JSON.stringify(args);
			const value = valueMap.get(argsString);
			if (value !== undefined) {
				return value;
			}

			valueMap.set(argsString, null);
			const result = module(...args);
			if (typeof result.then === 'function') {
				result.then((result: any) => {
					valueMap.set(argsString, result);
					this.invalidate();
				});
				return null;
			}
			return result;
		}
	}
}

export default Build;
