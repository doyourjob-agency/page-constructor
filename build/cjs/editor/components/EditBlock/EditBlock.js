"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditBlockControls = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const icons_1 = require("@gravity-ui/icons");
const uikit_1 = require("@gravity-ui/uikit");
const utils_1 = require("../../../utils");
const b = (0, utils_1.block)('edit-block');
var EditBlockControls;
(function (EditBlockControls) {
    EditBlockControls["Up"] = "up";
    EditBlockControls["Down"] = "down";
    EditBlockControls["Copy"] = "copy";
    EditBlockControls["Delete"] = "delete";
})(EditBlockControls = exports.EditBlockControls || (exports.EditBlockControls = {}));
const actionsOrder = [
    EditBlockControls.Up,
    EditBlockControls.Down,
    EditBlockControls.Copy,
    EditBlockControls.Delete,
];
const editBlockControlsIcons = {
    [EditBlockControls.Up]: icons_1.ChevronUp,
    [EditBlockControls.Down]: icons_1.ChevronDown,
    [EditBlockControls.Copy]: icons_1.Copy,
    [EditBlockControls.Delete]: icons_1.TrashBin,
};
const EditBlock = ({ actions, isActive, onSelect, isHeader, children, resetPaddings, }) => {
    const ref = (0, react_1.useRef)(null);
    const stopPropagationProps = (0, react_1.useMemo)(() => ({ onClick: (e) => e.stopPropagation() }), []);
    const { onKeyDown } = (0, uikit_1.useActionHandlers)(onSelect);
    (0, react_1.useEffect)(() => {
        if (isActive && ref.current) {
            //TODO: add behavior 'smooth' after addiiton of dynamic form layout open/close managing support
            ref.current.scrollIntoView({ block: 'center' });
        }
    }, [isActive]);
    return (react_1.default.createElement("div", { className: b({ active: isActive }), onClick: onSelect, onKeyDown: onKeyDown, ref: ref, role: "button", "aria-current": isActive, tabIndex: 0 },
        react_1.default.createElement("div", { className: b('controls', {
                active: isActive,
                isHeader,
                'reset-paddings': resetPaddings,
            }) }, isActive && (react_1.default.createElement("div", Object.assign({ className: b('controls-content') }, stopPropagationProps), actionsOrder.map((action) => {
            const Icon = editBlockControlsIcons[action];
            return actions[action] ? (react_1.default.createElement("button", { key: action, className: b('control'), onClick: actions[action] },
                react_1.default.createElement(Icon, null))) : null;
        })))),
        children));
};
exports.default = react_1.default.memo(EditBlock);
