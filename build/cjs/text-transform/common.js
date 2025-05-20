"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typografTransformer = exports.yfmTransformer = exports.createItemsParser = void 0;
const tslib_1 = require("tslib");
const plugins_1 = tslib_1.__importDefault(require("@diplodoc/transform/lib/plugins"));
const markdown_it_mark_1 = tslib_1.__importDefault(require("markdown-it-mark"));
const markdownItCustomSpan_1 = tslib_1.__importDefault(require("./markdownItCustomSpan"));
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
    const { plugins = [] } = options;
    const { html } = (0, utils_1.fullTransform)(content, {
        lang,
        plugins: [...plugins_1.default, markdown_it_mark_1.default, markdownItCustomSpan_1.default, ...plugins],
    });
    return html;
}
exports.yfmTransformer = yfmTransformer;
function typografTransformer(lang, content) {
    return (0, utils_1.typografToHTML)(content, lang);
}
exports.typografTransformer = typografTransformer;
