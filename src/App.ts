import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import Markdown from './Markdown';

import * as css from './App.m.css';

export default class App extends WidgetBase {
	protected render() {
		console.log('App');
		return v('div', { classes: [css.root] }, [
			v('div', [
				v('div', [ 'hello' ]),
				w(Markdown, { path: './src/foo.md' }),
				w(Markdown, { path: './src/bar.md' })
			])
		]);
	}
}
