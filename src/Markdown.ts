import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';
import runner from './runner';

import markdown from './markdown.build';

export default class Markdown extends WidgetBase<{ path: string }> {
	private run = runner(() => this.invalidate());
	protected render() {
		const result = this.run(markdown, this.properties.path);
		return v('div', [ result ]);
	}
}
