import { __rest } from "tslib";
import transformYFM from '@diplodoc/transform';
import sanitize from 'sanitize-html';
import Typograf from 'typograf';
export var TransformType;
(function (TransformType) {
    TransformType["Text"] = "text";
    TransformType["Html"] = "html";
})(TransformType || (TransformType = {}));
export const DEFAULT_ALLOWED_TAGS = [
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
export const typografConfig = {
    enabled: ['common/nbsp/afterNumber', 'common/nbsp/afterParagraphMark'],
    disabled: [
        'common/symbols/cf',
        'ru/other/phone-number',
        'common/space/afterColon',
        'common/space/afterSemicolon',
    ],
};
export const sanitizeStripOptions = {
    allowedTags: [],
    allowedAttributes: {},
};
export function addTypografRules(options) {
    options.forEach((option) => {
        Typograf.addRule(option);
    });
}
function enableRules(tp) {
    const { disabled, enabled } = typografConfig;
    enabled.forEach((rule) => tp.enableRule(rule));
    disabled.forEach((rule) => tp.disableRule(rule));
}
export function typograf(text, lang = 'ru') {
    const localeByLang = {
        ru: ['ru', 'en-US'],
        en: ['en-US', 'ru'],
    };
    const tp = new Typograf({
        locale: localeByLang[lang] || lang,
        htmlEntity: { type: 'name' },
    });
    enableRules(tp);
    return tp.execute(text);
}
export function sanitizeHtml(html, options = sanitizeStripOptions) {
    return html && sanitize(html, options || sanitizeStripOptions);
}
export function typografToHTML(text, lang, allowedTags = DEFAULT_ALLOWED_TAGS) {
    return text && typograf(sanitizeHtml(text, { allowedTags }), lang);
}
export function typografToText(text, lang) {
    return text && sanitizeHtml(typograf(text, lang));
}
export const transformMarkdown = (input, options) => {
    const { result } = transformYFM(input !== null && input !== void 0 ? input : '', options);
    return result;
};
export function fullTransform(input, _a) {
    var { lang } = _a, options = __rest(_a, ["lang"]);
    const result = transformMarkdown(input, Object.assign({ lang }, options));
    const { html, title } = result;
    return Object.assign(Object.assign({}, result), { html: typograf(html, lang), title: title && typograf(title, lang) });
}
export function typografEntity({ entity, fields, lang = 'ru', transformType = TransformType.Text, }) {
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
