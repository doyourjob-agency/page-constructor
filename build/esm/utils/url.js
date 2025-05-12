import { format, parse } from 'url';
const EXAMPLE_URL = 'https://example.org';
export const EXTERNAL_LINK_PROPS = { target: '_blank', rel: 'noopener noreferrer' };
export function getLinkProps(url, hostname, target) {
    let linkProps = { target };
    if (isLinkExternal(url, hostname)) {
        linkProps = Object.assign(Object.assign({}, linkProps), EXTERNAL_LINK_PROPS);
    }
    return linkProps;
}
export function isAbsoluteUrl(url) {
    // Using example URL as base for relative links
    const urlObj = new URL(url, EXAMPLE_URL);
    return (
    // Compare url origin with example and check that original url was not example one
    urlObj.origin !== EXAMPLE_URL || (typeof url === 'string' && url.startsWith(EXAMPLE_URL)));
}
export function isLinkExternal(url, routerHostname) {
    return (isAbsoluteUrl(url) &&
        getNonLocaleHostName(new URL(url).hostname) !== getNonLocaleHostName(routerHostname !== null && routerHostname !== void 0 ? routerHostname : ''));
}
export function getNonLocaleHostName(hostname) {
    return hostname.replace(/\.(ru|com)$/, '');
}
export function setUrlTld(url, tld = 'ru') {
    return typeof url === 'string' ? url === null || url === void 0 ? void 0 : url.replace(/\${tld}/g, tld) : url;
}
export const getPageSearchParams = (query = {}) => {
    const searchParams = new URLSearchParams();
    Object.entries(query).forEach(([key, value]) => {
        searchParams.set(key, String(value));
    });
    return searchParams;
};
export function getAbsolutePath(hostname, pathname, url) {
    if (!pathname) {
        return url !== null && url !== void 0 ? url : '';
    }
    const parsed = parse(url || '');
    return format(Object.assign(Object.assign({}, parsed), { protocol: parsed.protocol || 'https', hostname: parsed.hostname || hostname, pathname: parsed.pathname || pathname }));
}
