import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';

export default class Markdown extends WidgetBase<{ path: string }> {
	private _result: any;
	private async _markdown(path: string) {
		const md = await import('./@build/markdown');
		this._result = await md.default(path);
		this.invalidate();
	}

	protected render() {
		if (!this._result) {
			this._markdown(this.properties.path);
		}
		return v('div', [ this._result ]);
	}
}
