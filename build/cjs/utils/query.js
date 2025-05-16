"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertParsedUrlQueryToQuery = exports.updateQueryCallback = void 0;
function updateQueryCallback(query) {
    const url = new URL(window === null || window === void 0 ? void 0 : window.location.href);
    Object.keys(query).forEach((key) => {
        const value = query[key];
        if (value === undefined)
            return;
        if (!value) {
            url.searchParams.delete(key);
            return;
        }
        url.searchParams.set(key, String(value));
    });
    window.history.replaceState(window.history.state, '', url);
}
exports.updateQueryCallback = updateQueryCallback;
function convertParsedUrlQueryToQuery(parsedUrlQuery) {
    const query = {};
    Object.keys(parsedUrlQuery).forEach((key) => {
        var _a;
        const value = parsedUrlQuery[key];
        if (Array.isArray(value)) {
            query[key] = (_a = value.join(',')) !== null && _a !== void 0 ? _a : null;
        }
        else if (value === undefined) {
            query[key] = null;
        }
        else {
            query[key] = value;
        }
    });
    return query;
}
exports.convertParsedUrlQueryToQuery = convertParsedUrlQueryToQuery;
