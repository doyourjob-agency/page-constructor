import React, {useCallback, useContext, useMemo, useState} from 'react';

import {AnimateBlock, EmptyPlug, ReportSection, Title} from '../../components';
import FilterSelects from '../../components/Filters/FilterSelects/FilterSelects';
import {ReportsSectionsContext} from '../../context/reportsSectionsContext';
import {ReportsSectionsBlockProps, TitleItemProps} from '../../models';
import {block} from '../../utils';

import './ReportsSections.scss';

const b = block('reports-sections-block');

const titleColSizes = {
    all: 12,
};

export const ReportsSectionsBlock = ({title, typeKey, empty}: ReportsSectionsBlockProps) => {
    const data = useContext(ReportsSectionsContext);
    const {selects = [], sections = []} = useMemo(() => data[typeKey] || {}, [data, typeKey]);
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
            ? sections.filter((section) =>
                  f.every(([key, value]) => section.filters?.[key]?.includes(value)),
              )
            : sections;
    }, [sections, localFilters]);

    const titleProps =
        !title || typeof title === 'string'
            ? ({text: title, textSize: 'm'} as TitleItemProps)
            : title;

    return (
        <div className={b()}>
            {title && <Title className={b('title')} title={titleProps} colSizes={titleColSizes} />}
            <FilterSelects selects={selects} filters={localFilters} handleChange={handleChange} />
            {filteredItems.length ? (
                <AnimateBlock
                    key={JSON.stringify(localFilters)}
                    className={b('wrap-sections')}
                    animate
                >
                    <div className={b('sections')}>
                        {filteredItems.map((item, index) => (
                            <ReportSection key={index} {...item} />
                        ))}
                    </div>
                </AnimateBlock>
            ) : (
                <EmptyPlug empty={empty} className={b('empty')} />
            )}
        </div>
    );
};

export default ReportsSectionsBlock;
