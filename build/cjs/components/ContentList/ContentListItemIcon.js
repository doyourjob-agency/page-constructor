"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const theme_1 = require("../../context/theme");
const utils_1 = require("../../utils");
const Image_1 = tslib_1.__importDefault(require("../Image/Image"));
const utils_2 = require("../Media/Image/utils");
function isIconSvg(icon) {
    return typeof icon === 'function';
}
const ContentListItemIcon = ({ icon, className, qa }) => {
    const theme = (0, theme_1.useTheme)();
    const iconThemed = (0, utils_1.getThemedValue)(icon, theme);
    if (isIconSvg(iconThemed)) {
        const Icon = iconThemed;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Icon, { className: className })));
    }
    const iconData = (0, utils_2.getMediaImage)(iconThemed);
    return react_1.default.createElement(Image_1.default, Object.assign({}, iconData, { className: className, qa: qa }));
};
exports.default = ContentListItemIcon;
