import React from 'react';

import {TagProps} from '../../models';
import {block} from '../../utils/cn';

import './Tag.scss';

const b = block('tag');

export const Tag = ({text, color, textColor}: TagProps) => (
    <div className={b()} style={{backgroundColor: color, color: textColor}}>
        {text}
    </div>
);

export default Tag;
