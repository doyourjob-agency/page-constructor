"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQaAttrubutes = exports.getShareLink = exports.getHeaderBlock = exports.getOrderedBlocks = exports.getCustomTypes = exports.getCustomItems = exports.getBlockKey = exports.hasBlockTag = exports.getHeaderTag = void 0;
const tslib_1 = require("tslib");
const camelCase_1 = tslib_1.__importDefault(require("lodash/camelCase"));
const flatten_1 = tslib_1.__importDefault(require("lodash/flatten"));
const models_1 = require("../models");
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
function getHeaderTag(size) {
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
exports.getHeaderTag = getHeaderTag;
function hasBlockTag(content) {
    const regex = new RegExp(BLOCK_ELEMENTS_REGEX, 'g');
    return regex.test(content);
}
exports.hasBlockTag = hasBlockTag;
function getBlockKey(block, index) {
    return `${block.type}-${index}`;
}
exports.getBlockKey = getBlockKey;
const getCustomItems = (types, customBlocks = {}) => {
    return types.reduce((result, type) => {
        return Object.assign(result, customBlocks[type] || {});
    }, {});
};
exports.getCustomItems = getCustomItems;
const getCustomTypes = (types, customBlocks = {}) => {
    return types.reduce((result, type) => {
        return result.concat(Object.keys(customBlocks[type] || {}));
    }, []);
};
exports.getCustomTypes = getCustomTypes;
const getShareUrlWithParams = (url, params = {}) => {
    const result = new URL(url);
    Object.entries(params).forEach(([name, value]) => {
        if (value) {
            result.searchParams.set(name, value);
        }
    });
    return result.toString();
};
const getOrderedBlocks = (blocks, headerBlockTypes = []) => {
    return blocks.filter(({ type }) => !headerBlockTypes.includes(type));
};
exports.getOrderedBlocks = getOrderedBlocks;
const getHeaderBlock = (blocks, headerBlockTypes = []) => {
    return blocks.find(({ type }) => headerBlockTypes.includes(type));
};
exports.getHeaderBlock = getHeaderBlock;
const getShareLink = (url, type, title, text) => {
    // https://github.com/bradvin/social-share-urls
    switch (type) {
        case models_1.PCShareSocialNetwork.Telegram:
            return getShareUrlWithParams('https://t.me/share/url', { url, text: title });
        case models_1.PCShareSocialNetwork.Facebook:
            return getShareUrlWithParams('https://facebook.com/sharer.php', { u: url });
        case models_1.PCShareSocialNetwork.Twitter:
            return getShareUrlWithParams('https://twitter.com/intent/tweet', {
                url,
                text: title,
            });
        case models_1.PCShareSocialNetwork.Vk:
            return getShareUrlWithParams('https://vk.com/share.php', {
                url,
                title,
                comment: text,
            });
        case models_1.PCShareSocialNetwork.LinkedIn:
            return getShareUrlWithParams('https://www.linkedin.com/sharing/share-offsite/', {
                url,
            });
        default:
            // eslint-disable-next-line no-console
            console.error(`Unknown share type: ${type}`);
            return undefined;
    }
};
exports.getShareLink = getShareLink;
const getQaAttrubutes = (qa, ...customKeys) => {
    const attributes = {};
    if (qa) {
        const keys = QA_ATTRIBUTES_KEYS.concat((0, flatten_1.default)(customKeys));
        keys.forEach((key) => {
            attributes[(0, camelCase_1.default)(key)] = `${qa}-${key}`;
        });
        attributes.default = qa;
    }
    return attributes;
};
exports.getQaAttrubutes = getQaAttrubutes;
