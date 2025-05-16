"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_1 = require("../../utils");
const ServiceIcon_1 = tslib_1.__importDefault(require("../ServiceIcon/ServiceIcon"));
const b = (0, utils_1.block)('service-label');
const ServiceLabel = ({ name, slug }) => (react_1.default.createElement("div", { className: b() },
    react_1.default.createElement("div", { className: b('wrap'), "aria-hidden": "true" },
        react_1.default.createElement(ServiceIcon_1.default, { name: slug, size: 8 })),
    react_1.default.createElement("span", { className: b('name') },
        react_1.default.createElement("span", null, name))));
exports.default = ServiceLabel;
