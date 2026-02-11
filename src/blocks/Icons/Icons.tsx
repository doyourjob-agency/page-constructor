import React, {Fragment, useCallback, useContext} from 'react';

import {AnimateBlock, Image, Title} from '../../components';
import {LocationContext} from '../../context/locationContext';
import {useTheme} from '../../context/theme';
import {useAnalytics} from '../../hooks';
import {IconsBlockItemProps, IconsBlockProps} from '../../models';
import {block, getLinkProps, getThemedValue} from '../../utils';

import './Icons.scss';

const b = block('icons-block');

const getItemContent = (item: IconsBlockProps['items'][number] & {src: string}) => (
    <Fragment>
        <Image className={b('image')} src={item.src} />
        <p className={b('text')}>{item.text}</p>
    </Fragment>
);

const Icons = ({
    animated,
    title,
    description,
    size = 's',
    colSizes = {all: 12},
    items,
}: IconsBlockProps) => {
    const {hostname} = useContext(LocationContext);
    const handleAnalytics = useAnalytics();
    const theme = useTheme();

    const onClick = useCallback(
        ({analyticsEvents, url}: IconsBlockItemProps) => {
            handleAnalytics(analyticsEvents, {url});
        },
        [handleAnalytics],
    );

    return (
        <AnimateBlock className={b()} animate={animated}>
            <div className={b('root', {size})}>
                {(title || description) && (
                    <Title
                        className={b('header')}
                        title={title}
                        subtitle={description}
                        colSizes={colSizes}
                    />
                )}
                {items.map((item) => {
                    const themedSrc = getThemedValue(item.src, theme);
                    const itemContent = getItemContent({...item, src: themedSrc});
                    const {url, text} = item;
                    return url ? (
                        <a
                            className={b('item')}
                            key={url}
                            href={url}
                            aria-label={text}
                            title={text}
                            {...getLinkProps(url, hostname)}
                            onClick={() => onClick(item)}
                        >
                            {itemContent}
                        </a>
                    ) : (
                        <div className={b('item')} key={text}>
                            {itemContent}
                        </div>
                    );
                })}
            </div>
        </AnimateBlock>
    );
};

export default Icons;
