"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_1 = require("../../utils");
const Button_1 = tslib_1.__importDefault(require("../Button/Button"));
const b = (0, utils_1.block)('buttons');
function getButtonSize(size) {
    switch (size) {
        case 's':
            return 'm';
        case 'l':
        default:
            return 'xl';
    }
}
const Buttons = ({ className, titleId, buttons, size = 's', qa, buttonQa }) => buttons ? (react_1.default.createElement("div", { className: b({ size }, className), "data-qa": qa }, buttons.map((item) => (react_1.default.createElement(Button_1.default, Object.assign({ className: b('button') }, item, { key: item.url, size: getButtonSize(size), qa: buttonQa, extraProps: Object.assign({ 'aria-describedby': item.urlTitle ? undefined : titleId }, item.extraProps) })))))) : null;
exports.default = Buttons;
