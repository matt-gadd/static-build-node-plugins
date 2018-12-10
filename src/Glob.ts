import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import Build from './meta/Build';

import glob from './glob.build';

export default class Glob extends WidgetBase<{ pattern: string, renderer: (result: string[]) => any }> {
	protected render() {
		const result = this.meta(Build).run(glob)(this.properties.pattern);
		return result ? this.properties.renderer(result) : undefined;
	}
}
