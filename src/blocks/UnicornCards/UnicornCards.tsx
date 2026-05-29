import React from 'react';

import {Title} from '../../components';
import AnimateBlock from '../../components/AnimateBlock/AnimateBlock';
import {Col, Grid, Row} from '../../grid';
import {TitleItemProps, UnicornCardsBlockProps} from '../../models';
import {block} from '../../utils';

import Item from './Item/Item';

import './UnicornCards.scss';

const b = block('unicorn-cards-block');

const colSizes = {all: 12, xl: 3, lg: 4, md: 6};

export const UnicornCardsBlock = (props: UnicornCardsBlockProps) => {
    const {animated, title, items} = props;

    const titleProps =
        !title || typeof title === 'string'
            ? ({text: title, textSize: 'l'} as TitleItemProps)
            : title;
    const hasTitle = Boolean(title);

    return (
        <AnimateBlock className={b()} animate={animated}>
            <div className={b('root')}>
                {hasTitle && (
                    <Title title={titleProps} className={b('title')} colSizes={{all: 12}} />
                )}
                <Grid>
                    <Row className={b('items')}>
                        {items?.map((item, index) => (
                            <Col key={index} sizes={colSizes}>
                                <Item {...item} />
                            </Col>
                        ))}
                    </Row>
                </Grid>
            </div>
        </AnimateBlock>
    );
};

export default UnicornCardsBlock;
