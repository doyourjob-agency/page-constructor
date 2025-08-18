import React, {useMemo} from 'react';

import {Button, HTML} from '../../components';
import {HighlightTableCell} from '../../models';
import {block} from '../../utils';

import './HighlightTable.scss';

const b = block('highlight-table-block');

const justifyMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
};

type Props = {
    cell: HighlightTableCell | string;
    justify?: 'left' | 'center' | 'right';
    columnWidth?: number;
};

export const Cell = ({cell, justify, columnWidth}: Props) => {
    const style = useMemo(
        () => ({
            textAlign: justify ?? 'left',
            alignItems: justify ? justifyMap[justify] : 'flex-start',
            width: `calc(var(--block-width) * ${
                1 / (12 / ((typeof cell === 'object' && cell.columnWidth) || columnWidth || 2))
            })`,
        }),
        [cell, columnWidth, justify],
    );
    return (
        <div className={b('cell')} style={style}>
            <HTML>{typeof cell === 'object' ? cell.cell : cell}</HTML>
            {typeof cell === 'object' && cell.buttonText && (
                <Button
                    url={cell.buttonUrl}
                    text={cell.buttonText}
                    theme="action"
                    className={b('button')}
                />
            )}
        </div>
    );
};

export default Cell;
