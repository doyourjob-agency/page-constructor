"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const servicesContext_1 = require("../../context/servicesContext");
const Image_1 = tslib_1.__importDefault(require("../Image/Image"));
const ServiceIcon = ({ name, size }) => {
    const { icons } = (0, react_1.useContext)(servicesContext_1.ServicesContext);
    const data = name ? icons[name] : '';
    if (!data)
        return null;
    if (data.startsWith('/') || /^(http(s?):\/\/)/.test(data)) {
        return react_1.default.createElement(Image_1.default, { src: data, alt: "", "aria-hidden": "true" });
    }
    return react_1.default.createElement(uikit_1.Icon, { data: data, size: size, "aria-hidden": "true" });
};
exports.default = ServiceIcon;
