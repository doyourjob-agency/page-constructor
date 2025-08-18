import React from 'react';

import AnimateBlock from '../../components/AnimateBlock/AnimateBlock';
import {Grid, Row} from '../../grid';
import {LogoRotatorBlockProps} from '../../models';
import {block} from '../../utils';

import Slots from './Slots';

import './LogoRotator.scss';

const b = block('logo-rotator-block');

export const LogoRotatorBlock = (props: LogoRotatorBlockProps) => {
    const {animated, ...other} = props;

    return (
        <AnimateBlock className={b()} animate={animated}>
            <Grid className={b('items')}>
                <Row className={b('row')}>
                    <Slots {...other} />
                </Row>
            </Grid>
        </AnimateBlock>
    );
};

export default LogoRotatorBlock;
