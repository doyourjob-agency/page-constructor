import React, {useEffect, useRef} from 'react';

import {Text} from '@gravity-ui/uikit';

import {Buttons, HTML, Links, Table} from '../../components';
import {Col, Grid, GridColumnAlignSelf, GridColumnSize, Row} from '../../grid';
import {TableBlockProps} from '../../models';
import {block} from '../../utils';

import './Table.scss';

const b = block('table-block');
const bTable = block('table');
const bScrollbar = block('table-scrollbar');

export const TableBlock = (props: TableBlockProps) => {
    const {title, table, description, links, buttons} = props;

    const tableRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const pcTable = tableRef.current?.querySelector(
            `.${bTable()} > .${bTable('table')}`,
        ) as HTMLElement;

        if (!pcTable) return () => {};

        let scrollBar = pcTable.querySelector(`.${bScrollbar()}`) as HTMLElement;
        let scrollThumb = scrollBar?.querySelector('div') as HTMLElement;

        if (!scrollBar) {
            scrollBar = document.createElement('div');
            scrollThumb = document.createElement('div');
            scrollBar.appendChild(scrollThumb);
            scrollBar.className = bScrollbar();
            pcTable.appendChild(scrollBar);
        }

        const updateProgress = () => {
            const scrollWidth = Math.round(
                scrollBar.clientWidth * (pcTable.clientWidth / pcTable.scrollWidth),
            );
            const scrollLeft = Math.round(
                scrollBar.clientWidth * (pcTable.scrollLeft / pcTable.scrollWidth),
            );
            scrollThumb.style.setProperty('transform', `translateX(${scrollLeft}px)`);
            scrollThumb.style.setProperty('width', `${scrollWidth}px`);
        };

        updateProgress();

        pcTable.addEventListener('scroll', updateProgress);

        return () => {
            pcTable.removeEventListener('scroll', updateProgress);
        };
    }, []);

    return (
        <div className={b()} ref={tableRef}>
            <Grid className={b('content')}>
                <Row className={b('row')}>
                    <Col
                        className={b('lhs')}
                        sizes={{[GridColumnSize.Md]: 3, [GridColumnSize.All]: 12}}
                        alignSelf={GridColumnAlignSelf.Start}
                    >
                        <Text variant="display-2">{title}</Text>
                        {description && (
                            <div className={b('description')}>
                                <Text variant="body-2">
                                    <HTML>{description}</HTML>
                                </Text>
                            </div>
                        )}
                        {links?.length && <Links className={b('bottomObject')} links={links} />}
                        {buttons?.length && (
                            <Buttons className={b('bottomObject')} buttons={buttons} />
                        )}
                    </Col>
                    <Col
                        sizes={{[GridColumnSize.Md]: 8, [GridColumnSize.All]: 12}}
                        offsets={{[GridColumnSize.Md]: 1}}
                    >
                        <Table className={b('table')} {...table} />
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

export default TableBlock;
