"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderTags = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const icons_1 = require("@gravity-ui/icons");
const uikit_1 = require("@gravity-ui/uikit");
const grid_1 = require("../../../grid");
const utils_1 = require("../../../utils");
const b = (0, utils_1.block)('header-tags');
function getIcon(name) {
    switch (name) {
        case 'clock':
            return react_1.default.createElement(uikit_1.Icon, { data: icons_1.Clock, size: 16 });
        case 'map':
            return react_1.default.createElement(uikit_1.Icon, { data: icons_1.MapPin, size: 16 });
        default:
            return null;
    }
}
const HeaderTags = ({ theme, tags, className }) => {
    if (!(tags === null || tags === void 0 ? void 0 : tags.length))
        return null;
    return (react_1.default.createElement(grid_1.Col, { className: b({ theme }, className) }, tags.map((tag) => (react_1.default.createElement(uikit_1.Button, Object.assign({ view: "outlined", size: "l", href: tag.url, className: b('tag', { disable: !tag.url }) }, (tag.url ? {} : { tabIndex: -1 }), { key: tag.text, target: tag.target }),
        getIcon(tag.icon),
        tag.text)))));
};
exports.HeaderTags = HeaderTags;
exports.default = exports.HeaderTags;
