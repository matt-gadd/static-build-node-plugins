const glob = require("glob")

export default (pattern: string) => {
	return glob.sync(pattern, {});
}
