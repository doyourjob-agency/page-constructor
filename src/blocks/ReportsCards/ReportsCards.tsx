import React, {useCallback, useContext, useMemo, useState} from 'react';

import {Select, Title, YFMWrapper} from '../../components';
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
    const {selects, items} = useMemo(() => data[typeKey], [data, typeKey]);
    const initFilters = useMemo(
        () => selects?.reduce((acc, select) => ({...acc, [select.name]: select.init}), {}) || {},
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

    const titleProps =
        !title || typeof title === 'string'
            ? ({text: title, textSize: 'm'} as TitleItemProps)
            : title;

    return (
        <div className={b()}>
            {title && <Title className={b('title')} title={titleProps} colSizes={titleColSizes} />}
            {selects?.length && (
                <div className={b('select')}>
                    {selects.map(({name, options}) => (
                        <Select key={name} name={name} options={options} onChange={handleChange} />
                    ))}
                </div>
            )}
            {filteredItems.length ? (
                <Row>
                    {filteredItems.map((item, index) => (
                        <Col key={index} sizes={cardsColSizes}>
                            <AttachmentCard {...item} />
                        </Col>
                    ))}
                </Row>
            ) : (
                <div className={b('empty')}>{empty}</div>
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
