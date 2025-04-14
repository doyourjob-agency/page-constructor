import React from 'react';
import { Bars, Xmark } from '@gravity-ui/icons';
import { Control } from '../../../components';
import { block } from '../../../utils';
import './MobileMenuButton.css';
const b = block('mobile-menu-button');
const ICON_SIZE = 24;
export const MobileMenuButton = ({ isSidebarOpened, onSidebarOpenedChange, }) => (React.createElement(Control, { className: b(), onClick: (e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        onSidebarOpenedChange(!isSidebarOpened);
    }, size: "l", icon: isSidebarOpened ? Xmark : Bars, iconSize: ICON_SIZE }));
