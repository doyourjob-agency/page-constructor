import React, {useContext, useEffect, useMemo} from 'react';

import {BasicCard, CardLayoutBlock, ReportsContext, SliderBlock, Title} from '../..';
import {RelevantReportsBlockProps} from '../../models';
import {block} from '../../utils';

import './RelevantReports.scss';

const b = block('relevant-reports-block');

const sliderColSizes = {
    xl: 3,
    lg: 2,
    sm: 1,
};

const layoutColSizes = {
    all: 12,
    lg: 4,
    md: 6,
};

export const RelevantReports = ({
    typeKey,
    link,
    title,
    description,
    slider,
    date,
    dateStart,
    dateEnd,
}: RelevantReportsBlockProps) => {
    const [now, setNow] = React.useState<Date | null>(null);
    const data = useContext(ReportsContext);
    const {items = []} = useMemo(() => data[typeKey] || {}, [data, typeKey]);

    useEffect(() => {
        setNow(new Date());
    }, []);

    const filteredPosts = useMemo(() => {
        if (!now) return [];
        return items.filter((item) => {
            const itemDate = new Date(item.options?.date || '');
            let isDateMatch = true;

            switch (date) {
                case 'today': {
                    const startOfToday = new Date(now);
                    startOfToday.setHours(0, 0, 0, 0);
                    const endOfToday = new Date(now);
                    endOfToday.setHours(23, 59, 59, 999);
                    isDateMatch = itemDate >= startOfToday && itemDate <= endOfToday;
                    break;
                }
                case 'week': {
                    const weekAgo = new Date(now);
                    weekAgo.setDate(now.getDate() - 7);
                    isDateMatch = itemDate >= weekAgo && itemDate <= now;
                    break;
                }
                case 'month': {
                    const monthAgo = new Date(now);
                    monthAgo.setMonth(now.getMonth() - 1);
                    isDateMatch = itemDate >= monthAgo && itemDate <= now;
                    break;
                }
                default: {
                    if (dateStart || dateEnd) {
                        const startDate = dateStart ? new Date(dateStart) : new Date('1970-01-01');
                        const endDate = dateEnd ? new Date(dateEnd) : now;
                        isDateMatch = itemDate >= startDate && itemDate <= endDate;
                    }
                }
            }

            return isDateMatch;
        });
    }, [now, items, date, dateStart, dateEnd]);

    const renderItems = useMemo(() => {
        if (slider) {
            return (
                <div className={b('slider')}>
                    <SliderBlock slidesToShow={sliderColSizes}>
                        {filteredPosts.map((item, index) => (
                            <BasicCard
                                key={index}
                                title={item.title}
                                text={item.date}
                                url={item.url || ''}
                                border="line"
                            />
                        ))}
                    </SliderBlock>
                </div>
            );
        }

        return (
            <CardLayoutBlock colSizes={layoutColSizes}>
                {filteredPosts.map((item, index) => (
                    <div className={b('item')} key={index}>
                        <BasicCard
                            title={item.title}
                            text={item.date}
                            url={item.url || ''}
                            border="line"
                        />
                    </div>
                ))}
            </CardLayoutBlock>
        );
    }, [filteredPosts, slider]);

    return (
        <div className={b()}>
            {(title || description) && (
                <Title title={title} subtitle={description} link={link} colSizes={{all: 12}} />
            )}
            {filteredPosts.length > 0 && renderItems}
        </div>
    );
};

export default RelevantReports;
