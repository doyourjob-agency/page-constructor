import React, {useCallback} from 'react';

import {Text} from '@gravity-ui/uikit';

import {HTML, YFMWrapper} from '../../components';
import {Col, Grid, Row} from '../../grid';
import {HighlightTableBlockProps} from '../../models';
import {block} from '../../utils';

import './HighlightTable.scss';

const b = block('highlight-table-block');

function getColSize(value?: string) {
    switch (value) {
        case 'xxl':
            return 12;
        case 'xl':
            return 6;
        case 'l':
            return 4;
        case 'm':
            return 3;
        case 's':
            return 2;
        case 'xs':
            return 1;
        default:
            return undefined;
    }
}

export const HighlightTableBlock = (props: HighlightTableBlockProps) => {
    const {title, description, table} = props;
    const firstRow = table.content[0] || [];
    const otherRows = table.content.slice(1);

    const renderRow = useCallback(
        (row: string[], index: number) => (
            <Row
                key={index}
                className={b('row')}
                style={{backgroundColor: table.highlighter?.[index] ?? ''}}
            >
                {row.map((cell, cellIndex) => (
                    <Col
                        sizes={getColSize(table.customColumnWidth?.[cellIndex])}
                        key={cellIndex}
                        className={b('cell')}
                        style={{textAlign: table.justify?.[cellIndex] ?? 'left'}}
                    >
                        <HTML>{cell}</HTML>
                    </Col>
                ))}
            </Row>
        ),
        [table.customColumnWidth, table.highlighter, table.justify],
    );

    return (
        <div className={b()}>
            <Text className={b('title')} variant="header-2">
                {title}
            </Text>
            {description && (
                <div className={b('description')}>
                    <YFMWrapper content={description} modifiers={{constructor: true}} />
                </div>
            )}
            <Grid className={b('content')}>
                <div className={b('head')}>{renderRow(firstRow, 0)}</div>
                <div className={b('body')}>{otherRows.map(renderRow)}</div>
            </Grid>
        </div>
    );
};

export default HighlightTableBlock;
