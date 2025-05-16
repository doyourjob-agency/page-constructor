import React, {useContext} from 'react';

import {CardLayoutBlock} from '..';
import {InfiniteScroll} from '../../components';
import {PressReleasesContext} from '../../context/pressReleasesContext';
import {PressReleasesBlockProps} from '../../models';
import {BasicCard} from '../../sub-blocks';

const colSizes = {
    all: 12,
    md: 8,
    lg: 8,
    xl: 8,
};

export const PressReleasesBlock = ({title}: PressReleasesBlockProps) => {
    const {pressReleases, page, pageSize, onLoadMore} = useContext(PressReleasesContext);
    const itemsToShow = pressReleases.slice(0, page * pageSize);
    const hasMore = page < Math.ceil(pressReleases.length / pageSize);

    return (
        <div>
            <CardLayoutBlock title={title} colSizes={colSizes}>
                {itemsToShow.map((item) => (
                    <BasicCard
                        key={item.url}
                        title={item.title}
                        text={item.date}
                        url={item.url}
                        border="line"
                    />
                ))}
            </CardLayoutBlock>
            <InfiniteScroll hasMore={hasMore} onNext={onLoadMore} />
        </div>
    );
};

export default PressReleasesBlock;
