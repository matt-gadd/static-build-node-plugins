import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import Markdown from './Markdown';

import * as css from './App.m.css';

export default class App extends WidgetBase {
	protected render() {
		return v('div', { classes: [css.root] }, [
			v('div', [
				w(Markdown, { path: './src/foo.md' }),
			])
		]);
	}
}
