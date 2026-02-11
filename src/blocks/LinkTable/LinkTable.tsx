import React from 'react';

import {AnimateBlock, Link, Title} from '../../components';
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

export const LinkTableBlock = ({animated, title, items}: LinkTableBlockProps) => (
    <AnimateBlock className={b()} animate={animated}>
        <div className={b('root')}>
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
        </div>
    </AnimateBlock>
);

export default LinkTableBlock;
