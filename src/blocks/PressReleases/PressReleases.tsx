import React, {useContext, useMemo, useState} from 'react';

import {CardLayoutBlock} from '..';
import {Paginator} from '../../components';
import {PressReleasesContext} from '../../context/pressReleasesContext';
import {PressReleasesBlockProps} from '../../models';
import {BasicCard} from '../../sub-blocks';
import {block} from '../../utils';

import './PressReleases.scss';

const b = block('press-releases-block');

const colSizes = {
    all: 12,
    md: 8,
    lg: 8,
    xl: 8,
};

export const PressReleasesBlock = ({title}: PressReleasesBlockProps) => {
    const {items, itemsPerPage} = useContext(PressReleasesContext);
    const [currentPage, setCurrentPage] = useState(1);

    const paginatedItems = useMemo(() => {
        if (!itemsPerPage) return items;
        const startIndex = (currentPage - 1) * itemsPerPage;
        return items.slice(startIndex, startIndex + itemsPerPage);
    }, [items, itemsPerPage, currentPage]);

    return (
        <div className={b()}>
            <CardLayoutBlock title={title} colSizes={colSizes}>
                {paginatedItems.map((item) => (
                    <BasicCard
                        key={item.url}
                        title={item.title}
                        text={item.date}
                        url={item.url}
                        border="line"
                    />
                ))}
            </CardLayoutBlock>
            {itemsPerPage && (
                <Paginator
                    page={currentPage}
                    itemsPerPage={itemsPerPage}
                    totalItems={items.length}
                    maxPages={Infinity}
                    onPageChange={setCurrentPage}
                    className={b('paginator')}
                />
            )}
        </div>
    );
};

export default PressReleasesBlock;
