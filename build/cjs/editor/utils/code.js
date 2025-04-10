"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCode = void 0;
const tslib_1 = require("tslib");
const js_yaml_1 = tslib_1.__importDefault(require("js-yaml"));
function parseCode(code) {
    var _a;
    const pageContent = js_yaml_1.default.load(code);
    return Object.assign(Object.assign({}, pageContent), { blocks: (_a = pageContent.blocks) === null || _a === void 0 ? void 0 : _a.filter(Boolean) });
}
exports.parseCode = parseCode;
