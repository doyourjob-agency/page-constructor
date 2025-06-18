import React from 'react';

import {TagProps} from '../../models';
import {block} from '../../utils/cn';

import './Tag.scss';

const b = block('tag');

type Props = TagProps & {
    withoutMarginBottom?: boolean;
};

export const Tag = ({text, backgroundColor, textColor, withoutMarginBottom}: Props) => (
    <div
        className={b({['without-margin-bottom']: withoutMarginBottom})}
        style={{backgroundColor, color: textColor}}
    >
        {text}
    </div>
);

export default Tag;
