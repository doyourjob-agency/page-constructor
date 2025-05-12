"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeMicrodata = exports.mergeVideoMicrodata = void 0;
const tslib_1 = require("tslib");
const sanitize_html_1 = tslib_1.__importDefault(require("sanitize-html"));
const mergeVideoMicrodata = (values = {}, newValues = {}) => (Object.assign(Object.assign({}, values), { videoMicrodata: Object.assign(Object.assign({}, newValues), (values.videoMicrodata || {})) }));
exports.mergeVideoMicrodata = mergeVideoMicrodata;
function sanitizeMicrodata(html) {
    return html && (0, sanitize_html_1.default)(html, { allowedTags: [], allowedAttributes: {} });
}
exports.sanitizeMicrodata = sanitizeMicrodata;
