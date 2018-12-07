import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';

export default class Markdown extends WidgetBase<{ path: string }> {
	private _result: any;

	protected render() {
		if (!this._result) {
			import('./@build/markdown')
				.then(({ default: md }) => md(this.properties.path))
				.then((result) => {
					this._result = result;
					this.invalidate();
				});
		}
		return v('div', [ this._result ]);
	}
}
