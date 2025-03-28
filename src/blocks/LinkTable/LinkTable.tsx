import React from 'react';

import {Link, Title} from '../../components';
import {Col, Row} from '../../grid';
import {LinkTableBlockProps} from '../../models';
import {block} from '../../utils';

import './LinkTable.scss';

const b = block('link-table-block');

const colSizes = {
    lg: 4,
    md: 6,
    all: 12,
};

export const LinkTableBlock = ({title, items}: LinkTableBlockProps) => (
    <React.Fragment>
        <Title title={title} />
        <Row className={b('links')}>
            {items.map((links) => (
                <Col key={links.map((link) => link.url).join()} sizes={colSizes}>
                    {links.map((link) => (
                        <Link key={link.url} theme="normal" {...link} />
                    ))}
                </Col>
            ))}
        </Row>
    </React.Fragment>
);

export default LinkTableBlock;
