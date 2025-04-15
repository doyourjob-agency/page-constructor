import React from 'react';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs/HeaderBreadcrumbs';
import { Col, Row } from '../../../grid';
import { block } from '../../../utils';
import './Breadcrumbs.css';
const b = block('header-block-breadcrumbs');
export const Breadcrumbs = ({ breadcrumbs, theme, }) => {
    if (!breadcrumbs)
        return null;
    return (React.createElement(Row, { className: b() },
        React.createElement(Col, null,
            React.createElement(HeaderBreadcrumbs, Object.assign({}, breadcrumbs, { theme: theme })))));
};
export default Breadcrumbs;
