import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';
import has from '@dojo/framework/has/has';
import cache from './cache';

export default class Markdown extends WidgetBase<{ path: string }> {
	protected render() {
		const { path } = this.properties;
		if (has('build-time-render')) {
			const { convert } = require('./@build/markdown');
			cache.set(path, convert(path));
		}
		const text = cache.get(path);
		return v('div', [ text ]);
	}
}
