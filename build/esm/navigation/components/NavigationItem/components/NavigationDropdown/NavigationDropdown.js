import { __rest } from "tslib";
import React, { Fragment, useRef } from 'react';
import { ToggleArrow } from '../../../../../components';
import { getMediaImage } from '../../../../../components/Media/Image/utils';
import { block } from '../../../../../utils';
import NavigationPopup from '../../../NavigationPopup/NavigationPopup';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import './NavigationDropdown.css';
const b = block('navigation-dropdown');
const TOGGLE_ARROW_SIZE = 12;
export const NavigationDropdown = (_a) => {
    var { text, icon, className, iconSize, hidePopup, items, isActive } = _a, props = __rest(_a, ["text", "icon", "className", "iconSize", "hidePopup", "items", "isActive"]);
    const iconData = icon && getMediaImage(icon);
    const anchorRef = useRef(null);
    return (React.createElement(Fragment, null,
        React.createElement("button", Object.assign({ ref: anchorRef }, props, { type: "button", className: b(null, className), "aria-expanded": isActive }),
            React.createElement(ContentWrapper, { text: text, icon: iconData, iconSize: iconSize, "aria-expanded": isActive }),
            React.createElement(ToggleArrow, { className: b('arrow'), size: TOGGLE_ARROW_SIZE, type: 'vertical', iconType: "navigation", open: isActive })),
        React.createElement(NavigationPopup, { open: isActive, onClose: hidePopup, items: items, anchorRef: anchorRef })));
};
