"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_1 = require("../../../utils");
const i18n_1 = require("./i18n");
const b = (0, utils_1.block)('media-component-iframe');
const Iframe = (props) => {
    const { iframe, margins = true } = props;
    const { height = 400, src, width, name, title } = iframe;
    return iframe ? (react_1.default.createElement("div", { className: b({ margins }), style: { height } },
        react_1.default.createElement("iframe", { className: b('item'), loading: "lazy", title: title || (0, i18n_1.i18n)('iframe-title'), frameBorder: 0, src: src, width: width, height: height, name: name }))) : null;
};
exports.default = Iframe;
