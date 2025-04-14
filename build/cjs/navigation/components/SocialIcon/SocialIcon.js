"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const components_1 = require("../../../components");
const utils_1 = require("../../../components/Media/Image/utils");
const utils_2 = require("../../../utils");
const b = (0, utils_2.block)('social-icon');
const SocialIcon = ({ icon, url, className, urlTitle }) => {
    const iconData = (0, utils_1.getMediaImage)(icon);
    const { alt } = iconData;
    return (react_1.default.createElement("a", { href: url, "aria-label": alt, title: urlTitle || alt, target: "_blank", rel: "noopener noreferrer", className: b(null, className) },
        react_1.default.createElement(components_1.Image, Object.assign({ className: b('icon') }, iconData))));
};
exports.default = SocialIcon;
