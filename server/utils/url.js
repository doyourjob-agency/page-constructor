"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAbsolutePath = exports.getPageSearchParams = exports.setUrlTld = exports.getNonLocaleHostName = exports.isLinkExternal = exports.isAbsoluteUrl = exports.getLinkProps = exports.EXTERNAL_LINK_PROPS = void 0;
const url_1 = require("url");
const EXAMPLE_URL = 'https://example.org';
exports.EXTERNAL_LINK_PROPS = { target: '_blank', rel: 'noopener noreferrer' };
function getLinkProps(url, hostname, target) {
    let linkProps = { target };
    if (isLinkExternal(url, hostname)) {
        linkProps = Object.assign(Object.assign({}, linkProps), exports.EXTERNAL_LINK_PROPS);
    }
    return linkProps;
}
exports.getLinkProps = getLinkProps;
function isAbsoluteUrl(url) {
    // Using example URL as base for relative links
    const urlObj = new URL(url, EXAMPLE_URL);
    return (
    // Compare url origin with example and check that original url was not example one
    urlObj.origin !== EXAMPLE_URL || (typeof url === 'string' && url.startsWith(EXAMPLE_URL)));
}
exports.isAbsoluteUrl = isAbsoluteUrl;
function isLinkExternal(url, routerHostname) {
    return (isAbsoluteUrl(url) &&
        getNonLocaleHostName(new URL(url).hostname) !== getNonLocaleHostName(routerHostname !== null && routerHostname !== void 0 ? routerHostname : ''));
}
exports.isLinkExternal = isLinkExternal;
function getNonLocaleHostName(hostname) {
    return hostname.replace(/\.(ru|com)$/, '');
}
exports.getNonLocaleHostName = getNonLocaleHostName;
function setUrlTld(url, tld = 'ru') {
    return typeof url === 'string' ? url === null || url === void 0 ? void 0 : url.replace(/\${tld}/g, tld) : url;
}
exports.setUrlTld = setUrlTld;
const getPageSearchParams = (query = {}) => {
    const searchParams = new URLSearchParams();
    Object.entries(query).forEach(([key, value]) => {
        searchParams.set(key, String(value));
    });
    return searchParams;
};
exports.getPageSearchParams = getPageSearchParams;
function getAbsolutePath(hostname, pathname, url) {
    if (!pathname) {
        return url !== null && url !== void 0 ? url : '';
    }
    const parsed = (0, url_1.parse)(url || '');
    return (0, url_1.format)(Object.assign(Object.assign({}, parsed), { protocol: parsed.protocol || 'https', hostname: parsed.hostname || hostname, pathname: parsed.pathname || pathname }));
}
exports.getAbsolutePath = getAbsolutePath;
