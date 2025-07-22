import React, {useCallback, useContext, useMemo, useState} from 'react';

import {EmptyPlug, Title, YFMWrapper} from '../../components';
import FilterSelects from '../../components/Filters/FilterSelects/FilterSelects';
import {ReportsCardsContext} from '../../context/reportsCardsContext';
import {Col, Row} from '../../grid';
import {ReportsCardsBlockProps, TitleItemProps} from '../../models';
import {AttachmentCard} from '../../sub-blocks';
import {block} from '../../utils';

import './ReportsCards.scss';

const b = block('reports-cards-block');

const titleColSizes = {
    all: 12,
};

const cardsColSizes = {
    all: 12,
    md: 6,
    lg: 3,
};

export const ReportsCardsBlock = ({title, typeKey, postscript, empty}: ReportsCardsBlockProps) => {
    const data = useContext(ReportsCardsContext);
    const {selects = [], groups = []} = useMemo(() => data[typeKey] || {}, [data, typeKey]);
    const initFilters = useMemo(
        () => selects.reduce((acc, select) => ({...acc, [select.name]: select.init}), {}) || {},
        [selects],
    );
    const [localFilters, setLocalFilters] = useState<Record<string, string>>(initFilters);

    const handleChange = useCallback(
        (name: string, value: string) => setLocalFilters((prev) => ({...prev, [name]: value})),
        [],
    );

    const filteredGroups = useMemo(() => {
        const activeFilters = Object.entries(localFilters).filter(([_, value]) => value !== 'all');

        return groups
            .map((group) => {
                const filteredItems = activeFilters.length
                    ? group.items.filter((item) =>
                          activeFilters.every(([key, value]) =>
                              item.filters?.[key]?.includes(value),
                          ),
                      )
                    : group.items;

                return {...group, items: filteredItems};
            })
            .filter((group) => group.items.length > 0);
    }, [groups, localFilters]);

    const titleProps =
        !title || typeof title === 'string'
            ? ({text: title, textSize: 'm'} as TitleItemProps)
            : title;

    return (
        <div className={b()}>
            {title && <Title className={b('title')} title={titleProps} colSizes={titleColSizes} />}
            <FilterSelects selects={selects} filters={localFilters} handleChange={handleChange} />
            {filteredGroups.length ? (
                <div className={b('groups')}>
                    {filteredGroups.map((group, groupIndex) => (
                        <div key={groupIndex} className={b('group')}>
                            {group.title && (
                                <Title
                                    title={{text: group.title, textSize: 'm'}}
                                    colSizes={titleColSizes}
                                />
                            )}
                            <Row className={b('items')}>
                                {group.items.map((item, index) => (
                                    <Col key={index} sizes={cardsColSizes}>
                                        <AttachmentCard {...item} />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    ))}
                </div>
            ) : (
                <EmptyPlug empty={empty} />
            )}
            {postscript && (
                <YFMWrapper
                    className={b('postscript')}
                    content={postscript}
                    modifiers={{constructor: true, [`constructor-size-s`]: true}}
                />
            )}
        </div>
    );
};

export default ReportsCardsBlock;
