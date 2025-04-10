import React from 'react';

import {block} from '../../../utils';

import './HeaderTag.scss';

const b = block('header-block-tag');

interface HeaderTagProps {
    tag?: string | null;
}

export const HeaderTag = ({tag}: HeaderTagProps) => {
    if (!tag) return null;

    return <div className={b()}>{tag}</div>;
};

export default HeaderTag;
