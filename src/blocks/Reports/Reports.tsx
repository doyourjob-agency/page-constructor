import React, {useCallback, useContext, useMemo, useState} from 'react';

import {Select} from '../../components';
import {ReportsContext} from '../../context/reportsContext';
import {ReportsBlockProps} from '../../models';
import {block} from '../../utils';

import ReportsItem from './ReportsItem/ReportsItem';

import './Reports.scss';

const b = block('reports-block');

export const ReportsBlock = ({typeKey, empty}: ReportsBlockProps) => {
    const data = useContext(ReportsContext);
    const {selects, items, filesOutline} = useMemo(() => data[typeKey], [data, typeKey]);
    const initFilters = useMemo(
        () => selects?.reduce((acc, select) => ({...acc, [select.name]: select.init}), {}) || {},
        [selects],
    );
    const [localFilters, setLocalFilters] = useState<Record<string, string>>(initFilters);
    const handleChange = useCallback(
        (name: string, value: string) => setLocalFilters((prev) => ({...prev, [name]: value})),
        [],
    );
    const filteredItems = useMemo(
        () =>
            Object.keys(localFilters).length
                ? items.filter((item) =>
                      Object.entries(localFilters).reduce((acc, [key, value]) => {
                          if (item.filters?.[key]?.includes(value)) {
                              return true;
                          }
                          return acc;
                      }, false),
                  )
                : items,
        [items, localFilters],
    );
    return (
        <div className={b()}>
            {selects?.length && (
                <div className={b('select')}>
                    {selects.map(({name, options}) => (
                        <Select key={name} name={name} options={options} onChange={handleChange} />
                    ))}
                </div>
            )}
            {filteredItems.length ? (
                filteredItems?.map((item, index) => (
                    <ReportsItem key={index} {...item} filesOutline={filesOutline} />
                ))
            ) : (
                <div className={b('empty')}>{empty}</div>
            )}
        </div>
    );
};

export default ReportsBlock;
