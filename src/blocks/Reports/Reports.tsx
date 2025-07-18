import React, {useCallback, useContext, useMemo, useState} from 'react';

import {Spin} from '@gravity-ui/uikit';

import {EmptyPlug, Paginator, Title} from '../../components';
import FilterSelects from '../../components/Filters/FilterSelects/FilterSelects';
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

    const handleChange = useCallback((name: string, value: string) => {
        setLocalFilters((prev) => ({...prev, [name]: value}));
        setPage(1);
    }, []);

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

    const titleProps = useMemo(
        () =>
            !title || typeof title === 'string'
                ? ({text: title, textSize: 'm'} as TitleItemProps)
                : title,
        [title],
    );

    const renderItems = useMemo(() => {
        if (loading) {
            return <Spin size="xl" className={b('loader')} />;
        }
        if (!paginatedItems.length) {
            return <EmptyPlug empty={empty} />;
        }
        return (
            <ul className={b('items')}>
                {paginatedItems.map((item, index) => (
                    <li key={index}>
                        <ReportsItem {...item} filesOutline={filesOutline} />
                    </li>
                ))}
            </ul>
        );
    }, [empty, filesOutline, loading, paginatedItems]);

    return (
        <div className={b()}>
            {title && <Title className={b('title')} title={titleProps} colSizes={titleColSizes} />}
            <FilterSelects selects={selects} filters={localFilters} handleChange={handleChange} />
            {renderItems}
            {itemsPerPage && (
                <Paginator
                    page={page}
                    itemsPerPage={itemsPerPage}
                    totalItems={filteredItems.length}
                    maxPages={Infinity}
                    onPageChange={setPage}
                    className={b('paginator')}
                />
            )}
        </div>
    );
};

export default ReportsBlock;
