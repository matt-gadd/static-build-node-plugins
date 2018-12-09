import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import runner from './runner';

import glob from './glob.build';

export default class Glob extends WidgetBase<{ pattern: string, renderer: (result: string[]) => any }> {
	private run = runner(() => this.invalidate());
	protected render() {
		const result = this.run(glob, this.properties.pattern);
		return result ? this.properties.renderer(result) : undefined;
	}
}
