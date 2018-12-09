import WidgetBase from '@dojo/framework/widget-core/WidgetBase';

import glob from './glob.build';

export default class Glob extends WidgetBase<{ pattern: string, renderer: (result: string[]) => any }> {
	protected render() {
		const result = glob(this.properties.pattern);
		return this.properties.renderer(result);
	}
}
