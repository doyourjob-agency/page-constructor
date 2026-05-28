import React from 'react';

import {YFMWrapper} from '../../components';
import {YFMBlockProps} from '../../models';
import {block, cn} from '../../utils/cn';

import './YFM.scss';

const b = cn('yfm');
const byfm = block('yfm-block');

export const YFMBlock = (props: YFMBlockProps) => {
    const {text, textSize} = props;

    return (
        <YFMWrapper
            content={text}
            modifiers={{
                blog: true,
                resetPaddings: true,
            }}
            className={b({'no-list-reset': true}, byfm({size: textSize}))}
        />
    );
};

export default YFMBlock;
