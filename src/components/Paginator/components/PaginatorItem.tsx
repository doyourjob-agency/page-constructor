import React, {useCallback, useMemo} from 'react';

import {ArrowLeftIcon, ArrowRightIcon} from '../../../icons';
import {block} from '../../../utils/cn';
import {i18n} from '../i18n';
import {ArrowType, PaginatorItemProps} from '../types';

const b = block('paginator');

const PaginatorItem = ({dataKey, type, active, onClick}: PaginatorItemProps) => {
    const index = Number(dataKey);

    const handleClick = useCallback(() => {
        if (typeof onClick === 'function') {
            if (type === ArrowType.Prev) {
                onClick(ArrowType.Prev);
                return;
            }
            if (type === ArrowType.Next) {
                onClick(ArrowType.Next);
                return;
            }
            onClick(index);
        }
    }, [index, onClick, type]);

    const renderContent = useMemo(() => {
        if (type === 'ellipsis') {
            return '…';
        } else if (type === ArrowType.Prev) {
            return (
                <React.Fragment>
                    <ArrowLeftIcon />
                    <span>{i18n('prev')}</span>
                </React.Fragment>
            );
        } else if (type === ArrowType.Next) {
            return (
                <React.Fragment>
                    <span>{i18n('next')}</span>
                    <ArrowRightIcon />
                </React.Fragment>
            );
        } else {
            return index;
        }
    }, [index, type]);

    return (
        <button
            className={b('item', {type, active})}
            aria-current={active ? 'true' : undefined}
            onClick={handleClick}
        >
            {renderContent}
        </button>
    );
};

export default React.memo(PaginatorItem);
