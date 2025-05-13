"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typografTransformer = exports.yfmTransformer = exports.createItemsParser = void 0;
const plugins_1 = __importDefault(require("@diplodoc/transform/lib/plugins"));
const utils_1 = require("./utils");
const createItemsParser = (fields) => (transformer, items) => items.map((item) => {
    if (!item) {
        return item;
    }
    else if (typeof item === 'string') {
        return transformer(item);
    }
    else {
        return Object.assign(Object.assign({}, item), fields.reduce((acc, fieldName) => {
            if (item[fieldName]) {
                // eslint-disable-next-line no-param-reassign
                acc[fieldName] = transformer(item[fieldName]);
            }
            return acc;
        }, {}));
    }
});
exports.createItemsParser = createItemsParser;
function yfmTransformer(lang, content, options = {}) {
    const { plugins = [], allowHTML } = options;
    const { html } = (0, utils_1.fullTransform)(content, {
        lang,
        plugins: [...plugins_1.default, ...plugins],
        allowHTML,
    });
    return html;
}
exports.yfmTransformer = yfmTransformer;
function typografTransformer(lang, content) {
    return (0, utils_1.typografToHTML)(content, lang);
}
exports.typografTransformer = typografTransformer;
