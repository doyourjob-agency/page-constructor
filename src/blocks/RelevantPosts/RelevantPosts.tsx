import React, {useContext, useEffect, useMemo} from 'react';

import {CardLayoutBlock, SliderBlock, Title} from '../..';
import {RelevantPostsContext} from '../../context/relevantPostsContext';
import {PostCardSize, RelevantPostsBlockProps} from '../../models';
import PostCard from '../../sub-blocks/PostCard/PostCard';
import {block} from '../../utils';

import './RelevantPosts.scss';

const b = block('relevant-posts');

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

export const RelevantPosts = ({
    title,
    description,
    slider,
    date,
    dateStart,
    dateEnd,
    tags,
    services,
    pinnedPost,
}: RelevantPostsBlockProps) => {
    const [now, setNow] = React.useState<Date | null>(null);

    const {posts} = useContext(RelevantPostsContext);

    useEffect(() => {
        setNow(new Date());
    }, []);

    const filteredPosts = useMemo(() => {
        if (!now) return [];
        return posts.filter((item) => {
            const itemDate = new Date(item.dateTime);
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

            // Фильтрация по тегам
            const isTagMatch =
                !tags || tags.length === 0 || item.tags?.some((tag) => tags.includes(tag.slug));

            // Фильтрация по сервисам
            const isServiceMatch =
                !services ||
                services.length === 0 ||
                item.services?.some((s) => services.includes(s));

            return isDateMatch && isTagMatch && isServiceMatch;
        });
    }, [now, posts, date, tags, services, dateStart, dateEnd]);

    const [findedPinnedPost, restPosts] = useMemo(() => {
        if (!pinnedPost || filteredPosts.length === 0) return [undefined, filteredPosts];
        const postsCopy = [...filteredPosts];
        const pinned = postsCopy.pop(); // безопасно
        return [pinned, postsCopy];
    }, [filteredPosts, pinnedPost]);

    const items = useMemo(() => {
        if (slider) {
            return (
                <div className={b('slider')}>
                    <SliderBlock slidesToShow={sliderColSizes}>
                        {restPosts.map((item) => (
                            <PostCard key={item.slug} {...item} showTag />
                        ))}
                    </SliderBlock>
                </div>
            );
        }
        return (
            <CardLayoutBlock colSizes={layoutColSizes}>
                {restPosts.map((item) => (
                    <PostCard key={item.slug} {...item} showTag />
                ))}
            </CardLayoutBlock>
        );
    }, [restPosts, slider]);

    return (
        <div className={b()}>
            {(title || description) && <Title title={title} subtitle={description} />}
            {findedPinnedPost && (
                <div className={b('pinned')}>
                    <PostCard {...findedPinnedPost} size={PostCardSize.MEDIUM} fullWidth showTag />
                </div>
            )}
            {restPosts.length > 0 && items}
        </div>
    );
};

export default RelevantPosts;
