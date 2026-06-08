import React from 'react';

import {DividerProps} from '../../models';
import {block, getBlockVisibilityClasses} from '../../utils';

import './Divider.scss';

const b = block('divider-block');

const Divider = ({size = 'm', border, visibility}: DividerProps) => (
    <div className={b({size, border, ...getBlockVisibilityClasses(visibility)})} />
);

export default Divider;
