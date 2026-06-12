import React from 'react';

import AnimateBlock from '../../components/AnimateBlock/AnimateBlock';
import TitleItem from '../../components/Title/TitleItem';
import {Col, Grid, Row} from '../../grid';
import {TitleItemProps, UnicornCardsBlockProps} from '../../models';
import {block} from '../../utils';

import Item from './Item/Item';

import './UnicornCards.scss';

const b = block('unicorn-cards-block');

const colSizes = {all: 12, xl: 3, lg: 4, md: 6};

export const UnicornCardsBlock = (props: UnicornCardsBlockProps) => {
    const {animated, title, text, items, unicornSdkUrl} = props;

    const titleProps =
        !title || typeof title === 'string'
            ? ({text: title, textSize: 'l'} as TitleItemProps)
            : title;

    return (
        <AnimateBlock className={b()} animate={animated}>
            <div className={b('root')}>
                {title || text ? (
                    <div className={b('head')}>
                        <TitleItem {...titleProps} />
                        {text && <div className={b('text')}>{text}</div>}
                    </div>
                ) : null}
                <Grid>
                    <Row className={b('items')}>
                        {items?.map((item, index) => (
                            <Col key={index} sizes={colSizes}>
                                <Item unicornSdkUrl={unicornSdkUrl} {...item} />
                            </Col>
                        ))}
                    </Row>
                </Grid>
            </div>
        </AnimateBlock>
    );
};

export default UnicornCardsBlock;
