"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('ErrorWrapper');
const ErrorWrapper = ({ text, buttonText, className, handler, isError, children, }) => isError ? (react_1.default.createElement("div", { className: b(null, className) },
    react_1.default.createElement("div", { className: b('text') }, text),
    handler && (react_1.default.createElement(uikit_1.Button, { size: "s", onClick: handler }, buttonText)))) : (react_1.default.createElement(react_1.default.Fragment, null, children));
exports.default = ErrorWrapper;
