import React from 'react';

import {block} from '../../utils';

import './EmptyPlug.scss';

const b = block('empty-plug');

export interface EmptyPlugProps {
    empty?: string;
}

export const EmptyPlug = ({empty}: EmptyPlugProps) => {
    return <div className={b()}>{empty}</div>;
};

export default React.memo(EmptyPlug);
