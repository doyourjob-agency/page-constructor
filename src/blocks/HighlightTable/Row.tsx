import React, {useMemo} from 'react';

import {HighlightTableCell} from '../../models';
import {block} from '../../utils';

import Cell from './Cell';

import './HighlightTable.scss';

const b = block('highlight-table-block');

type Props = {
    row: HighlightTableCell[];
    rowHoverIncrease?: boolean;
    color?: string;
    justify?: ('left' | 'center' | 'right')[];
    customColumnWidth?: number[];
};

export const Row = ({row, rowHoverIncrease, color, justify, customColumnWidth}: Props) => {
    const style = useMemo(
        () =>
            color
                ? ({
                      ['--ps-ht-color']: color,
                  } as React.CSSProperties)
                : {},
        [color],
    );
    return (
        <div className={b('row', {increase: rowHoverIncrease})} style={style}>
            {row.map((cell, cellIndex) => (
                <Cell
                    key={cellIndex}
                    cell={cell}
                    justify={justify?.[cellIndex]}
                    columnWidth={customColumnWidth?.[cellIndex]}
                />
            ))}
        </div>
    );
};

export default React.memo(Row);
