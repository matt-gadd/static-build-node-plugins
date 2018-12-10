import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';
import Build from './meta/Build';

import markdown from './markdown.build';

export default class Markdown extends WidgetBase<{ path: string }> {
	protected render() {
		const result = this.meta(Build).run(markdown)(this.properties.path);
		return v('div', [ result ]);
	}
}
