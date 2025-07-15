import React from 'react';

import {block} from '../../utils';

import './EmptyPlug.scss';

const b = block('empty-plug');

interface EmptyPlugProps {
    empty?: string;
    className?: string;
}

export const EmptyPlug = ({empty, className}: EmptyPlugProps) => {
    return <div className={b(null, className)}>{empty}</div>;
};

export default React.memo(EmptyPlug);
