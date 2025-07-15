import React, {useCallback, useMemo} from 'react';

import {ArrowLeftIcon, ArrowRightIcon} from '../../../icons';
import {block} from '../../../utils/cn';
import {i18n} from '../i18n';
import {ArrowType, PaginatorItemProps} from '../types';

const mapTypes: Record<string, string> = {
    [ArrowType.Prev]: 'prev',
    [ArrowType.Next]: 'next',
    ellipsis: 'ellipsis',
};

const b = block('paginator');

const PaginatorItem = ({dataKey, active, onClick}: PaginatorItemProps) => {
    const index = Number(dataKey);

    const handleClick = useCallback(() => {
        if (typeof onClick === 'function') {
            switch (dataKey) {
                case ArrowType.Prev: {
                    onClick(ArrowType.Prev);
                    break;
                }
                case ArrowType.Next: {
                    onClick(ArrowType.Next);
                    break;
                }
                case 'ellipsis':
                    break;
                default:
                    onClick(index);
                    break;
            }
        }
    }, [dataKey, index, onClick]);

    const renderContent = useMemo(() => {
        switch (dataKey) {
            case ArrowType.Prev: {
                return (
                    <React.Fragment>
                        <ArrowLeftIcon />
                        <span>{i18n('prev')}</span>
                    </React.Fragment>
                );
            }
            case ArrowType.Next: {
                return (
                    <React.Fragment>
                        <span>{i18n('next')}</span>
                        <ArrowRightIcon />
                    </React.Fragment>
                );
            }
            case 'ellipsis':
                return '…';
            default:
                return index;
        }
    }, [dataKey, index]);

    const type = useMemo(() => mapTypes[dataKey as string] ?? 'page', [dataKey]);

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
