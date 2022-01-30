"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/index.ts
var _pluginutils = require('@rollup/pluginutils');
var _unplugin = require('unplugin');

// src/core/transform.ts
var _esmodulelexer = require('es-module-lexer');
var _magicstring = require('magic-string'); var _magicstring2 = _interopRequireDefault(_magicstring);
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = (str) => str.replace(hyphenateRE, "-$1").toLowerCase();
var formatMap = {
  cjs: "lib",
  esm: "es"
};
var transformImportStyle = (specifier, source, useSource = false, options) => {
  const { prefix, lib, format } = options;
  const statement = source.substring(specifier.ss, specifier.se);
  const leftBracket = statement.indexOf("{");
  if (leftBracket > -1) {
    const identifiers = statement.slice(leftBracket + 1, statement.indexOf("}"));
    const components = identifiers.split(",");
    const styleImports = [];
    components.forEach((c) => {
      const trimmed = c.trim();
      if (trimmed.startsWith(prefix)) {
        const component = trimmed.slice(prefix.length);
        if (useSource) {
          styleImports.push(`import '${lib}/${formatMap[format]}/components/${hyphenate(component)}/style'`);
        } else {
          styleImports.push(`import '${lib}/${formatMap[format]}/components/${hyphenate(component)}/style/css'`);
        }
      }
    });
    return styleImports.join("\n");
  }
};
async function transform(source, options) {
  const { useSource, lib, prefix, format } = options;
  if (!source)
    return;
  await _esmodulelexer.init;
  const specifiers = _esmodulelexer.parse.call(void 0, source)[0].filter(({ n }) => {
    return n === lib || n === `${lib}/es/components` || n === `${lib}/lib/components`;
  });
  if (!specifiers.length)
    return;
  const styleImports = specifiers.map((s2) => {
    const ret = transformImportStyle(s2, source, useSource, {
      lib,
      prefix,
      format
    });
    return ret;
  }).filter((s2) => s2).join("\n");
  const lastSpecifier = specifiers[specifiers.length - 1];
  const s = new (0, _magicstring2.default)(source);
  s.appendLeft(lastSpecifier.se + 1, `
${styleImports}
`);
  return {
    code: s.toString(),
    map: options.sourceMap ? s.generateMap() : null
  };
}

// src/index.ts
var defaultOptions = {
  lib: "element-plus",
  useSource: false,
  defaultLocale: "",
  format: "esm",
  prefix: "El",
  sourceMap: false
};
var src_default = _unplugin.createUnplugin.call(void 0, (userOptions = {}) => {
  const exclude = "node_modules/**";
  const include = ["**/*.vue", "**/*.ts", "**/*.js", "**/*.tsx", "**/*.jsx"];
  const filter = _pluginutils.createFilter.call(void 0, include, exclude);
  const options = Object.assign(defaultOptions, userOptions);
  return {
    name: "unplugin-element-plus",
    enforce: "post",
    transformInclude(id) {
      return filter(id);
    },
    async transform(source) {
      return await transform(source, options);
    }
  };
});



exports.src_default = src_default;
