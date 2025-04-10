"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typografEntity = exports.fullTransform = exports.transformMarkdown = exports.typografToText = exports.typografToHTML = exports.sanitizeHtml = exports.typograf = exports.addTypografRules = exports.sanitizeStripOptions = exports.typografConfig = exports.DEFAULT_ALLOWED_TAGS = exports.TransformType = void 0;
const tslib_1 = require("tslib");
const transform_1 = tslib_1.__importDefault(require("@diplodoc/transform"));
const sanitize_html_1 = tslib_1.__importDefault(require("sanitize-html"));
const typograf_1 = tslib_1.__importDefault(require("typograf"));
var TransformType;
(function (TransformType) {
    TransformType["Text"] = "text";
    TransformType["Html"] = "html";
})(TransformType = exports.TransformType || (exports.TransformType = {}));
exports.DEFAULT_ALLOWED_TAGS = [
    'br',
    'b',
    'i',
    'strong',
    'em',
    'sup',
    'sub',
    'a',
    'ul',
    'ol',
    'li',
];
exports.typografConfig = {
    enabled: ['common/nbsp/afterNumber', 'common/nbsp/afterParagraphMark'],
    disabled: [
        'common/symbols/cf',
        'ru/other/phone-number',
        'common/space/afterColon',
        'common/space/afterSemicolon',
    ],
};
exports.sanitizeStripOptions = {
    allowedTags: [],
    allowedAttributes: {},
};
function addTypografRules(options) {
    options.forEach((option) => {
        typograf_1.default.addRule(option);
    });
}
exports.addTypografRules = addTypografRules;
function enableRules(tp) {
    const { disabled, enabled } = exports.typografConfig;
    enabled.forEach((rule) => tp.enableRule(rule));
    disabled.forEach((rule) => tp.disableRule(rule));
}
function typograf(text, lang = 'ru') {
    const localeByLang = {
        ru: ['ru', 'en-US'],
        en: ['en-US', 'ru'],
    };
    const tp = new typograf_1.default({
        locale: localeByLang[lang] || lang,
        htmlEntity: { type: 'name' },
    });
    enableRules(tp);
    return tp.execute(text);
}
exports.typograf = typograf;
function sanitizeHtml(html, options = exports.sanitizeStripOptions) {
    return html && (0, sanitize_html_1.default)(html, options || exports.sanitizeStripOptions);
}
exports.sanitizeHtml = sanitizeHtml;
function typografToHTML(text, lang, allowedTags = exports.DEFAULT_ALLOWED_TAGS) {
    return text && typograf(sanitizeHtml(text, { allowedTags }), lang);
}
exports.typografToHTML = typografToHTML;
function typografToText(text, lang) {
    return text && sanitizeHtml(typograf(text, lang));
}
exports.typografToText = typografToText;
const transformMarkdown = (input, options) => {
    const { result } = (0, transform_1.default)(input !== null && input !== void 0 ? input : '', options);
    return result;
};
exports.transformMarkdown = transformMarkdown;
function fullTransform(input, _a) {
    var { lang } = _a, options = tslib_1.__rest(_a, ["lang"]);
    const result = (0, exports.transformMarkdown)(input, Object.assign({ lang }, options));
    const { html, title } = result;
    return Object.assign(Object.assign({}, result), { html: typograf(html, lang), title: title && typograf(title, lang) });
}
exports.fullTransform = fullTransform;
function typografEntity({ entity, fields, lang = 'ru', transformType = TransformType.Text, }) {
    const transformTypeMap = {
        text: typografToText,
        html: typografToHTML,
    };
    const transformer = transformTypeMap[transformType];
    fields.forEach((fieldName) => {
        if (entity[fieldName]) {
            // eslint-disable-next-line no-param-reassign, no-not-accumulator-reassign/no-not-accumulator-reassign
            entity[fieldName] = transformer(entity[fieldName], lang);
        }
    });
    return entity;
}
exports.typografEntity = typografEntity;
