import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';
import has from '@dojo/framework/has/has';
import global from '@dojo/framework/shim/global';

global.__cache = global.__cache || {};

class Cache {
	private _invalidator: () => void;
	constructor(invalidator: any) {
		this._invalidator = invalidator;
	}
	get(name: string): any {
		return global.__cache[name];
	}
	set(name: string, value: any): void {
		if (typeof value.then === 'function') {
			value.then((result: any) => {
				this.set(name, result)
			});
		}
		else {
			global.__cache[name] = value;
			this._invalidator();
		}
	}
}

export default class Markdown extends WidgetBase<{ path: string }> {
	protected cache = new Cache(() => this.invalidate)

	protected render() {
		const { path } = this.properties;
		console.log(has('build-time-render'));
		if (has('build-time-render')) {
			const func = async () => {
				const md = await import('./@build/markdown');
				return md.default(path);
			}
			this.cache.set(path, func());
		}
		const text = this.cache.get(path);
		return v('div', [ text ]);
	}
}
