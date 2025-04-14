import camelCase from 'lodash/camelCase';
import flatten from 'lodash/flatten';
import { PCShareSocialNetwork } from '../models';
const BLOCK_ELEMENTS = [
    'div',
    'p',
    'h[1-6]',
    'address',
    'article',
    'aside',
    'blockquote',
    'canvas',
    'dd',
    'dl',
    'dt',
    'fieldset',
    'figcaption',
    'footer',
    'header',
    'hr',
    'main',
    'nav',
    'section',
    'video',
    'pre',
    'figure',
    'form',
    'pre',
    'ol',
    'ul',
    'li',
    'table',
    'thead',
    'tbody',
    'tfoot',
    'tr',
    'th',
    'td',
];
const BLOCK_ELEMENTS_REGEX = `<(${BLOCK_ELEMENTS.join('|')})[^>]*>`;
const QA_ATTRIBUTES_KEYS = ['container', 'content', 'wrapper', 'image', 'button', 'animate'];
export function getHeaderTag(size) {
    switch (size) {
        case 'xl':
        case 'l':
            return 'h1';
        case 's':
            return 'h3';
        case 'xs':
            return 'h4';
        case 'm':
        default:
            return 'h2';
    }
}
export function hasBlockTag(content) {
    const regex = new RegExp(BLOCK_ELEMENTS_REGEX, 'g');
    return regex.test(content);
}
export function getBlockKey(block, index) {
    return `${block.type}-${index}`;
}
export const getCustomItems = (types, customBlocks = {}) => {
    return types.reduce((result, type) => {
        return Object.assign(result, customBlocks[type] || {});
    }, {});
};
export const getCustomTypes = (types, customBlocks = {}) => {
    return types.reduce((result, type) => {
        return result.concat(Object.keys(customBlocks[type] || {}));
    }, []);
};
const getShareUrlWithParams = (url, params = {}) => {
    const result = new URL(url);
    Object.entries(params).forEach(([name, value]) => {
        if (value) {
            result.searchParams.set(name, value);
        }
    });
    return result.toString();
};
export const getOrderedBlocks = (blocks, headerBlockTypes = []) => {
    return blocks.filter(({ type }) => !headerBlockTypes.includes(type));
};
export const getHeaderBlock = (blocks, headerBlockTypes = []) => {
    return blocks.find(({ type }) => headerBlockTypes.includes(type));
};
export const getShareLink = (url, type, title, text) => {
    // https://github.com/bradvin/social-share-urls
    switch (type) {
        case PCShareSocialNetwork.Telegram:
            return getShareUrlWithParams('https://t.me/share/url', { url, text: title });
        case PCShareSocialNetwork.Facebook:
            return getShareUrlWithParams('https://facebook.com/sharer.php', { u: url });
        case PCShareSocialNetwork.Twitter:
            return getShareUrlWithParams('https://twitter.com/intent/tweet', {
                url,
                text: title,
            });
        case PCShareSocialNetwork.Vk:
            return getShareUrlWithParams('https://vk.com/share.php', {
                url,
                title,
                comment: text,
            });
        case PCShareSocialNetwork.LinkedIn:
            return getShareUrlWithParams('https://www.linkedin.com/sharing/share-offsite/', {
                url,
            });
        default:
            // eslint-disable-next-line no-console
            console.error(`Unknown share type: ${type}`);
            return undefined;
    }
};
export const getQaAttrubutes = (qa, ...customKeys) => {
    const attributes = {};
    if (qa) {
        const keys = QA_ATTRIBUTES_KEYS.concat(flatten(customKeys));
        keys.forEach((key) => {
            attributes[camelCase(key)] = `${qa}-${key}`;
        });
        attributes.default = qa;
    }
    return attributes;
};
