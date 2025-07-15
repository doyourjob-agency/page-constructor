import React, {useCallback, useContext, useMemo, useState} from 'react';

import {Paginator, ProgressCircular, Select, Title} from '../../components';
import {ReportsContext} from '../../context/reportsContext';
import {ReportsBlockProps, TitleItemProps} from '../../models';
import {block} from '../../utils';

import ReportsItem from './ReportsItem/ReportsItem';

import './Reports.scss';

const b = block('reports-block');

const titleColSizes = {
    all: 12,
};

export const ReportsBlock = ({title, typeKey, empty}: ReportsBlockProps) => {
    const data = useContext(ReportsContext);
    const [page, setPage] = useState(1);
    const {
        selects = [],
        loading,
        items = [],
        itemsPerPage,
        filesOutline,
    } = useMemo(() => data[typeKey] || {}, [data, typeKey]);
    const initFilters = useMemo(
        () => selects.reduce((acc, select) => ({...acc, [select.name]: select.init}), {}) || {},
        [selects],
    );
    const [localFilters, setLocalFilters] = useState<Record<string, string>>(initFilters);

    const handleChange = useCallback(
        (name: string, value: string) => setLocalFilters((prev) => ({...prev, [name]: value})),
        [],
    );

    const filteredItems = useMemo(() => {
        const f = Object.entries(localFilters).filter(([_, value]) => value !== 'all');
        return f.length
            ? items.filter((item) =>
                  f.every(([key, value]) => item.filters?.[key]?.includes(value)),
              )
            : items;
    }, [items, localFilters]);

    const paginatedItems = useMemo(() => {
        if (!itemsPerPage) return filteredItems;
        const startIndex = (page - 1) * itemsPerPage;
        return filteredItems.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredItems, itemsPerPage, page]);

    const titleProps =
        !title || typeof title === 'string'
            ? ({text: title, textSize: 'm'} as TitleItemProps)
            : title;

    const renderItems = useMemo(() => {
        if (loading) {
            return <ProgressCircular size={48} strokeWidth={2} color="#262626" />;
        }
        if (!paginatedItems.length) {
            return <div className={b('empty')}>{empty}</div>;
        }
        return paginatedItems.map((item, index) => (
            <ReportsItem key={index} {...item} filesOutline={filesOutline} />
        ));
    }, [loading, empty, filesOutline, paginatedItems]);

    return (
        <div className={b()}>
            {title && <Title className={b('title')} title={titleProps} colSizes={titleColSizes} />}
            {selects.length && (
                <div className={b('select')}>
                    {selects.map(({name, options}) => (
                        <Select key={name} name={name} options={options} onChange={handleChange} />
                    ))}
                </div>
            )}
            {renderItems}
            {itemsPerPage && (
                <Paginator
                    page={page}
                    itemsPerPage={itemsPerPage}
                    totalItems={filteredItems.length}
                    maxPages={Infinity}
                    onPageChange={setPage}
                />
            )}
        </div>
    );
};

export default ReportsBlock;
