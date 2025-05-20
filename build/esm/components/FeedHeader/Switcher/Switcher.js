import React, { useMemo } from 'react';
import { Icon, useUniqId } from '@gravity-ui/uikit';
import { CloseIcon } from '../../../icons/CloseIcon';
import { DropdownArrowIcon } from '../../../icons/DropdownArrowIcon';
import { block } from '../../../utils';
import './Switcher.css';
const b = block('feed-header-switcher');
const ICON_SIZE = 12;
const CLEAR_ICON_SIZE = 11;
export const Switcher = ({ initial, defaultLabel, list, onClick, controlRef, onKeyDown, open, renderClear, popupId, activeIndex, }) => {
    const itemsNames = useMemo(() => {
        const items = list
            .filter((item) => initial.includes(item.value))
            .map((item) => item.content);
        return items.length ? items : [defaultLabel];
    }, [defaultLabel, initial, list]);
    const hasCounter = itemsNames.length > 1;
    const contentElementId = useUniqId();
    return (React.createElement("div", { className: b(), ref: controlRef },
        React.createElement("button", { onClick: onClick, className: b('element', { overlay: true }), onKeyDown: onKeyDown, "aria-expanded": open, "aria-labelledby": contentElementId, "aria-activedescendant": activeIndex === undefined ? undefined : `${popupId}-item-${activeIndex}` }),
        React.createElement("div", { id: contentElementId, className: b('element', { content: true }), "aria-hidden": true }, itemsNames === null || itemsNames === void 0 ? void 0 : itemsNames.join(', ')),
        renderClear &&
            renderClear({
                renderIcon: () => (React.createElement(Icon, { data: CloseIcon, size: CLEAR_ICON_SIZE, className: b('clear') })),
            }),
        hasCounter && React.createElement("div", { className: b('element', { counter: true }) }, itemsNames.length),
        React.createElement("div", { className: b('element', { arrow: true }) },
            React.createElement(Icon, { data: DropdownArrowIcon, size: ICON_SIZE, className: b('arrow') }))));
};
export default Switcher;
