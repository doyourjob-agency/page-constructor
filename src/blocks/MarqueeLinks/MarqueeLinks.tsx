import React, {useCallback} from 'react';

import {Link, Text} from '@gravity-ui/uikit';
import Marquee from 'react-fast-marquee';

import {HTML, Image} from '../../components';
import {MarqueeLinksBlockProps, MarqueeLinksItem} from '../../models';
import {block} from '../../utils';

import './MarqueeLinks.scss';

const b = block('marquee-links-block');

export const MarqueeLinksBlock = ({
    title,
    description,
    textAlign = 'left',
    speed = 10,
    items,
}: MarqueeLinksBlockProps) => {
    const renderItem = useCallback((item: MarqueeLinksItem, index: number) => {
        if (item.url) {
            return (
                <Link key={item.src + index} href={item.url} extraProps={{tabIndex: -1}}>
                    <Image src={item.src} alt="" />
                </Link>
            );
        }
        return <Image src={item.src + index} key={item.src} alt="" />;
    }, []);

    if (!items.length) return null;

    return (
        <div className={b({[textAlign]: true})}>
            {title && (
                <div className={b('header')}>
                    <Text variant="display-2">{title}</Text>
                </div>
            )}
            {description && (
                <div className={b('description')}>
                    <Text variant="body-2">
                        <HTML>{description}</HTML>
                    </Text>
                </div>
            )}
            <Marquee gradient={true} autoFill={true} speed={speed} className={b('items')}>
                {items.map(renderItem)}
            </Marquee>
        </div>
    );
};

export default MarqueeLinksBlock;
