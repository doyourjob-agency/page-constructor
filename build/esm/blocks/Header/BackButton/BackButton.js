import React from 'react';
import { ArrowLeft } from '@gravity-ui/icons';
import { Button, Icon } from '@gravity-ui/uikit';
import { Col, Row } from '../../../grid';
import { block } from '../../../utils';
import './BackButton.css';
const b = block('header-block-back-button');
export const BackButton = ({ backButton, theme, }) => {
    if (!backButton)
        return null;
    return (React.createElement(Row, null,
        React.createElement(Col, null,
            React.createElement(Button, { href: backButton.link, size: "l", view: "flat-secondary", className: b('back-link', { theme }) },
                React.createElement(Icon, { data: ArrowLeft, size: 20 }),
                backButton.text))));
};
export default BackButton;
