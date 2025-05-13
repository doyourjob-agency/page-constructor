"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const utils_1 = require("../../utils");
const Image_1 = tslib_1.__importDefault(require("../Image/Image"));
const utils_2 = require("../Media/Image/utils");
const b = (0, utils_1.block)('icon-wrapper');
const IconWrapper = (props) => {
    const { icon, children, className } = props;
    if (!icon) {
        return react_1.default.createElement(react_1.Fragment, null, children);
    }
    const iconProps = (0, utils_2.getMediaImage)(icon.value);
    const iconPosition = icon === null || icon === void 0 ? void 0 : icon.position;
    return (react_1.default.createElement("div", { className: b({ ['icon-position']: iconPosition }, className) },
        iconProps && (react_1.default.createElement(Image_1.default, Object.assign({}, iconProps, { containerClassName: b('icon-container'), className: b('icon', { ['icon-position']: iconPosition }) }))),
        react_1.default.createElement("div", { className: b('content', { ['icon-position']: iconPosition }) }, children)));
};
exports.default = IconWrapper;
