/**
 * @name PackageJSON
 * 
 * @param {Object} exports Any named exports from here should have a 1:1 mapping to a file either in src ir lib (rollup output) directory. This is useful if you have a project that is deployed as an IIFE but you still have components you want to export independently. By default, any named exports defined here will be added to the rollup.imports object on projects that depend on this one.
 * @example 
 * "exports": {
 *     "deployedApp": "node_modules/@helio/component/lib/app.js",
 *     "subComponentA": "node_modules/@helio/component/lib/componentA.js",
 *     "subComponentB": "node_modules/@helio/component/lib/componentB.js"
 * }
 * @param {Object} rollup Rollup configuration object
 * @example 
 * "rollup": {
 *   "externals": [],
 *   "entry": "src/core/package.js",
 *   "format": "es",
 *   "imports": {}
 * },
 * 
 * @param {String[]} rollup.externals npm package names or named imports to be considered external when rolled up. This is useful for A) when you have a component that depends on a vendor library that will be included on the page but not in your bundle or B) when you are exporting an ES module to be consumed.
 * @example 
 * "externals": [
 *   "@helio/wc-utils",
 *   "@helio/wc-core",
 *   "@helio/wc-data",
 *   "@helio/wc-i18n", 
 *   "@helio/wc-ui"
 * ]
 * 
 * @param {Object} rollup.entry The entry point for rollup to begin bundling. Typically, this will be a file in core named the same as your package. This file is your "Main" where your exports live.
 * @example 
 * "entry": "src/core/package.js"
 * 
 * @param {"es"|"iife"} rollup.format The only two valid values are "es" and "iife". either you are creating a reusable component module (es) or a deployed application (iife).
 * @example 
 * "format": "es"
 * 
 * @param {Object} rollup.imports This is for named imports that may come from other projects or you can define yourself. an Example would be the whatwg/fetch polyfill where we want a specific file from the npm package but not the default script specified in the watwg/fetch package.json
 * @example 
 * "imports": {
 *   "namedDependency": "node_modules/file/not/specified/by/packagejson"
 * }
 */