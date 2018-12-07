import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import Outlet from '@dojo/framework/routing/Outlet';
import { Link } from '@dojo/framework/routing/Link';

import Markdown from './Markdown';
import Glob from './Glob';

import * as css from './App.m.css';

export default class App extends WidgetBase {
	protected render() {
		return v('div', { classes: [css.root] }, [
			w(Glob, {
				pattern: 'src/**/*.md',
				renderer: (paths: string[]) => {
					return paths.map((path: string) => {
						path = path.replace(/.*\//, '').replace('.md', '');
						return v('div', [
							w(Link, { to: 'tutorial', params: { name: path }}, [ path ])
						]);
					});
				}
			}),
			w(Outlet, { id: 'tutorial', renderer: ({ params }: any) => {
				const { name } = params;
				return w(Markdown, { path: `./src/${name}.md` });
			}})
		]);
	}
}
