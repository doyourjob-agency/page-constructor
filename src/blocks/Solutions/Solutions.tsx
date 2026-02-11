import React, {useContext} from 'react';

import {AnimateBlock, CardBase, HTML, Image} from '../../components';
import {SolutionsContext} from '../../context/solutionsContext';
import {Col, Grid, Row} from '../../grid';
import {SolutionsBlockProps} from '../../models';
import {block} from '../../utils';

import './Solutions.scss';

const b = block('solutions-block');

const colSizes = {
    all: 12,
    sm: 6,
    lg: 4,
};

export const SolutionsBlock = ({animated}: SolutionsBlockProps) => {
    const {items} = useContext(SolutionsContext);
    return (
        <AnimateBlock className={b()} animate={animated}>
            <Grid className={b('root')}>
                <Row className={b('cards')}>
                    {items.map((card) => (
                        <Col key={card.slug} className={b('card')} sizes={colSizes}>
                            {/* @ts-ignore */}
                            <CardBase url={`/solutions/${card.slug}`}>
                                <CardBase.Content>
                                    <Image
                                        className={b('icon')}
                                        src={card.image}
                                        alt=""
                                        aria-hidden="true"
                                    />
                                    <h5 className={b('title')}>
                                        <span>{card.name}</span>
                                    </h5>
                                    <HTML>{card.description}</HTML>
                                </CardBase.Content>
                            </CardBase>
                        </Col>
                    ))}
                </Row>
            </Grid>
        </AnimateBlock>
    );
};

export default SolutionsBlock;
