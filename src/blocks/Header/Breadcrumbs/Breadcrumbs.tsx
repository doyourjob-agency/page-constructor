import React from 'react';

import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs/HeaderBreadcrumbs';
import {Col, Row} from '../../../grid';
import {HeaderBreadCrumbsProps, TextTheme} from '../../../models';
import {block} from '../../../utils';

import './Breadcrumbs.scss';

const b = block('header-block-breadcrumbs');

export const Breadcrumbs = ({
    breadcrumbs,
    theme,
}: {
    breadcrumbs?: HeaderBreadCrumbsProps;
    theme: TextTheme;
}) => {
    if (!breadcrumbs) return null;
    return (
        <Row className={b()}>
            <Col>
                <HeaderBreadcrumbs {...breadcrumbs} theme={theme} />
            </Col>
        </Row>
    );
};

export default Breadcrumbs;
