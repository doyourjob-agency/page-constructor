"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const utils_1 = require("../../../utils");
const types_1 = require("../../types");
const DeviceEmulation_1 = tslib_1.__importDefault(require("../DeviceEmulation/DeviceEmulation"));
const b = (0, utils_1.block)('editor-layout');
const Left = () => null;
const Right = () => null;
// TODO in https://github.com/gravity-ui/page-constructor/issues/884 this component will be disappeared
const Layout = ({ children, editMode, viewMode }) => {
    let left, right;
    const isEditingMode = editMode === types_1.EditModeItem.Form;
    function handleChild(child) {
        switch (child === null || child === void 0 ? void 0 : child.type) {
            case Left:
                left = child === null || child === void 0 ? void 0 : child.props.children;
                break;
            case Right:
                right = child === null || child === void 0 ? void 0 : child.props.children;
                break;
        }
    }
    if (react_1.default.Children.toArray(children).length) {
        react_1.Children.forEach(children, handleChild);
    }
    return (react_1.default.createElement("div", { className: b('container') },
        react_1.default.createElement(react_1.Fragment, null,
            left && react_1.default.createElement("div", { className: b('left') }, left),
            right && (react_1.default.createElement("div", { className: b('right', { editing: isEditingMode }) },
                react_1.default.createElement(DeviceEmulation_1.default, { mode: viewMode }, right))))));
};
Layout.Left = Left;
Layout.Right = Right;
exports.default = Layout;
