import React from 'react';
import { Popup } from '@gravity-ui/uikit';
import { block } from '../../../utils';
import { NavigationLayout } from '../../models';
import NavigationItem from '../NavigationItem';
import './NavigationPopup.css';
const b = block('navigation-popup');
const OFFSET_RESET = [0, 0];
export const NavigationPopup = ({ anchorRef, items, onClose, className, open, }) => (React.createElement(Popup
// Workaround to recalculate position on every opening. Required for valid position calculation for scrolled header links.
, { 
    // Workaround to recalculate position on every opening. Required for valid position calculation for scrolled header links.
    anchorRef: open ? anchorRef : undefined, contentClassName: b(null, className), open: open, onClose: onClose, onOutsideClick: onClose, keepMounted: true, disablePortal: true, strategy: "fixed", placement: "bottom-start", offset: OFFSET_RESET },
    React.createElement("ul", { className: b('list') }, items.map((item) => (React.createElement(NavigationItem, { key: item.text, className: b('link'), data: item, menuLayout: NavigationLayout.Dropdown }))))));
export default NavigationPopup;
