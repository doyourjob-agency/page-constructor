"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_1 = require("../../utils");
const Link_1 = tslib_1.__importDefault(require("../Link/Link"));
const b = (0, utils_1.block)('links');
function getLinkSize(size) {
    switch (size) {
        case 's':
            return 'm';
        case 'l':
        default:
            return 'l';
    }
}
const Links = ({ className, titleId, links, size = 's', qa, linkQa }) => links ? (react_1.default.createElement("div", { className: b({ size }, className), "data-qa": qa }, links === null || links === void 0 ? void 0 : links.map((link) => (react_1.default.createElement(Link_1.default, Object.assign({ className: b('link') }, link, { textSize: getLinkSize(size), key: link.url, qa: linkQa, extraProps: Object.assign({ 'aria-describedby': link.urlTitle ? undefined : titleId }, link.extraProps) })))))) : null;
exports.default = Links;
