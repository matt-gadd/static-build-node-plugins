const fs = require('fs');
const unified = require('unified');
const parse = require('remark-parse');
const { v, w } = require('@dojo/framework/widget-core/d');
const toH = require('hast-to-hyperscript');
const remark2rehype = require('remark-rehype');

const pragma = (...args: any[]) => {
	const [ tag, props = {}, children ] = args;
	if (tag.substr(0, 1) === tag.substr(0, 1).toUpperCase()) {
		const type = `docs-${tag.toLowerCase()}`;
		return w(type, props, children);
	}
	return v(...args);
}

export default (path: string) => {
	const content = fs.readFileSync(path, 'utf-8');
	const pipeline = unified()
		.use(parse)
		.use(remark2rehype, {})

	const nodes = pipeline.parse(content);
	const result = pipeline.runSync(nodes);
	return toH(pragma, result);
}
