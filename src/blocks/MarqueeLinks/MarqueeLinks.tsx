import React, {useCallback} from 'react';

import {Link} from '@gravity-ui/uikit';
import Marquee from 'react-fast-marquee';

import {Image} from '../../components';
import {MarqueeLinksItem, MarqueeLinksProps} from '../../models';
import {block} from '../../utils';

import './MarqueeLinks.scss';

const b = block('marquee-links-block');

export const MarqueeLinks = ({speed = 10, items}: MarqueeLinksProps) => {
    const renderItem = useCallback((item: MarqueeLinksItem) => {
        const imageComponent = <Image src={item.src} alt="" />;
        if (item.url) {
            return (
                <Link key={item.src} href={item.url} extraProps={{tabIndex: -1}}>
                    {imageComponent}
                </Link>
            );
        }
        return imageComponent;
    }, []);

    if (!items.length) return null;

    return (
        <Marquee gradient={true} autoFill={true} speed={speed} className={b()}>
            {items.map(renderItem)}
        </Marquee>
    );
};

export default MarqueeLinks;
