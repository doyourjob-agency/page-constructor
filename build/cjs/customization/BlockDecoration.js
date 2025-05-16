"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockDecoration = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const innerContext_1 = require("../context/innerContext");
const BlockDecoration = (_a) => {
    var _b, _c;
    var { children: blockChildren } = _a, rest = tslib_1.__rest(_a, ["children"]);
    const blockDecorators = (_c = (_b = (0, react_1.useContext)(innerContext_1.InnerContext).customization) === null || _b === void 0 ? void 0 : _b.decorators) === null || _c === void 0 ? void 0 : _c.block;
    const content = blockDecorators
        ? blockDecorators.reduce((children, decorator) => decorator(Object.assign({ children }, rest)), blockChildren)
        : blockChildren;
    return react_1.default.createElement(react_1.Fragment, null, content);
};
exports.BlockDecoration = BlockDecoration;
