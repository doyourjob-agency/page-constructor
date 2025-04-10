"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const RootCn_1 = tslib_1.__importDefault(require("../../../components/RootCn"));
const Navigation_1 = tslib_1.__importDefault(require("./../../components/Navigation/Navigation"));
const Standalone = (props) => (react_1.default.createElement(RootCn_1.default, null,
    react_1.default.createElement(Navigation_1.default, Object.assign({}, props))));
exports.default = Standalone;
