import defaultPlugins from '@diplodoc/transform/lib/plugins';
import mark from 'markdown-it-mark';
import customSpanPlugin from './markdownItCustomSpan';
import { fullTransform, typografToHTML } from './utils';
export const createItemsParser = (fields) => (transformer, items) => items.map((item) => {
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
export function yfmTransformer(lang, content, options = {}) {
    const { plugins = [] } = options;
    const { html } = fullTransform(content, {
        lang,
        plugins: [...defaultPlugins, mark, customSpanPlugin, ...plugins],
    });
    return html;
}
export function typografTransformer(lang, content) {
    return typografToHTML(content, lang);
}
