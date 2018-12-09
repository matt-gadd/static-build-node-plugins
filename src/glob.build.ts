const glob = require("glob")

export default (pattern: string) => {
	return Promise.resolve(glob.sync(pattern, {}));
}
