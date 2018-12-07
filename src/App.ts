import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import Markdown from './Markdown';

import * as css from './App.m.css';

export default class App extends WidgetBase {
	private _paths = [
		'./src/foo.md',
		'./src/bar.md',
		'./src/qux.md'
	];
	protected render() {
		return v('div', { classes: [css.root] }, [
			v('div', this._paths.map((path) => w(Markdown, { path })))
		]);
	}
}
