import React from 'react';
import { Icon } from '@gravity-ui/uikit';
import { block } from '../../utils';
import { i18n } from './i18n';
import './Control.css';
const b = block('control');
export const defaultIconId = 'icon-test-id';
const Control = (props) => {
    const { icon, theme = 'primary', size = 's', iconSize = 16, disabled = false, onClick, className, qa, } = props;
    return (React.createElement("button", { type: "button", "aria-label": i18n('aria-label'), className: b({ size, theme, disabled }, className), onClick: disabled ? undefined : onClick, disabled: disabled, "data-qa": qa },
        React.createElement(Icon, { data: icon, size: iconSize, qa: defaultIconId })));
};
export default Control;
