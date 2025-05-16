import React, { useEffect, useMemo, useRef } from 'react';
import { ChevronDown, ChevronUp, Copy as CopyIcon, TrashBin } from '@gravity-ui/icons';
import { useActionHandlers } from '@gravity-ui/uikit';
import { block } from '../../../utils';
import './EditBlock.css';
const b = block('edit-block');
export var EditBlockControls;
(function (EditBlockControls) {
    EditBlockControls["Up"] = "up";
    EditBlockControls["Down"] = "down";
    EditBlockControls["Copy"] = "copy";
    EditBlockControls["Delete"] = "delete";
})(EditBlockControls || (EditBlockControls = {}));
const actionsOrder = [
    EditBlockControls.Up,
    EditBlockControls.Down,
    EditBlockControls.Copy,
    EditBlockControls.Delete,
];
const editBlockControlsIcons = {
    [EditBlockControls.Up]: ChevronUp,
    [EditBlockControls.Down]: ChevronDown,
    [EditBlockControls.Copy]: CopyIcon,
    [EditBlockControls.Delete]: TrashBin,
};
const EditBlock = ({ actions, isActive, onSelect, isHeader, children, resetPaddings, }) => {
    const ref = useRef(null);
    const stopPropagationProps = useMemo(() => ({ onClick: (e) => e.stopPropagation() }), []);
    const { onKeyDown } = useActionHandlers(onSelect);
    useEffect(() => {
        if (isActive && ref.current) {
            //TODO: add behavior 'smooth' after addiiton of dynamic form layout open/close managing support
            ref.current.scrollIntoView({ block: 'center' });
        }
    }, [isActive]);
    return (React.createElement("div", { className: b({ active: isActive }), onClick: onSelect, onKeyDown: onKeyDown, ref: ref, role: "button", "aria-current": isActive, tabIndex: 0 },
        React.createElement("div", { className: b('controls', {
                active: isActive,
                isHeader,
                'reset-paddings': resetPaddings,
            }) }, isActive && (React.createElement("div", Object.assign({ className: b('controls-content') }, stopPropagationProps), actionsOrder.map((action) => {
            const Icon = editBlockControlsIcons[action];
            return actions[action] ? (React.createElement("button", { key: action, className: b('control'), onClick: actions[action] },
                React.createElement(Icon, null))) : null;
        })))),
        children));
};
export default React.memo(EditBlock);
