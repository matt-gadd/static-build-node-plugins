import global from '@dojo/framework/shim/global';

global.__cache = global.__cache || {};

const cache = {
	get(name: string) {
		return global.__cache[name];
	},
	set(name: string, value: any) {
		global.__cache[name] = value;
	}
}

export default cache;
