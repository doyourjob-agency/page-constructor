import React, {useCallback} from 'react';

import {block} from '../../../utils/cn';
import {ArrowType, PaginatorItemProps} from '../types';

const b = block('paginator');

export const PaginatorItem = ({dataKey, mods, content, onClick}: PaginatorItemProps) => {
    const itemKey = Number(dataKey) > 0 ? Number(dataKey) : (dataKey as ArrowType);

    const handleClick = useCallback(() => {
        onClick?.(itemKey);
    }, [itemKey, onClick]);

    return (
        <button className={b('item', mods)} onClick={handleClick}>
            {content}
        </button>
    );
};
