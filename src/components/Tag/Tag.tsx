import React from 'react';

import {TagProps} from '../../models';
import {block} from '../../utils/cn';

import './Tag.scss';

const b = block('tag');

export const Tag = ({text, backgroundColor, textColor}: TagProps) => (
    <div className={b()} style={{backgroundColor, color: textColor}}>
        {text}
    </div>
);

export default Tag;
