import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';

import markdown from './markdown.build';

export default class Markdown extends WidgetBase<{ path: string }> {
	protected render() {
		const result = markdown(this.properties.path);
		return v('div', [ result ]);
	}
}
