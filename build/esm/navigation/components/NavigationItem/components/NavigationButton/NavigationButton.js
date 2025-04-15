import React from 'react';
import { Button, RouterLink } from '../../../../../components';
import { BlockIdContext } from '../../../../../context/blockIdContext';
import { block } from '../../../../../utils';
import './NavigationButton.css';
const b = block('navigation-button');
const ANALYTICS_ID = 'navigation';
export const NavigationButton = (props) => {
    const { url, target, className } = props;
    const classes = b(null, className);
    return (React.createElement(BlockIdContext.Provider, { value: ANALYTICS_ID }, target ? (React.createElement(Button, Object.assign({ className: classes }, props, { url: url }))) : (React.createElement(RouterLink, { href: url },
        React.createElement(Button, Object.assign({}, props, { className: classes, url: url }))))));
};
