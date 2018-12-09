import WidgetBase from '@dojo/framework/widget-core/WidgetBase';

import glob from './glob.build';

export default class Glob extends WidgetBase<{ pattern: string, renderer: (result: string[]) => any }> {
	private _result: any;

	protected render() {
		if (!this._result) {
			glob(this.properties.pattern)
				.then((result) => {
					this._result = this.properties.renderer(result);
					this.invalidate();
				});
		}
		return this._result;
	}
}
