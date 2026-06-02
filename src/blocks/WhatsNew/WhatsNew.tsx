import React from 'react';

import {AnimateBlock, Image} from '../../components';
import {WhatsNewBlockProps} from '../../models';
import NewsCard from '../../sub-blocks/NewsCard/NewsCard';
import {block} from '../../utils';
import ScrollerBlock from '../Scroller/Scroller';

import './WhatsNew.scss';

const b = block('whats-new-block');

const PlayIcon = () => {
    return (
        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.26306 0.210836L8.81342 4.08111C9.79579 4.66154 9.7961 6.08277 8.81398 6.66363L2.26943 10.5343C1.26995 11.1254 0.00671091 10.4055 0.00583857 9.24433L2.32602e-05 1.50339C-0.000849622 0.341466 1.2627 -0.380223 2.26306 0.210836Z" fill="#001A2B"/>
</svg>

    );
};

const PauseIcon = () => {
    return (
<svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 0C2.32843 0 3 0.671573 3 1.5V8.5C3 9.32843 2.32843 10 1.5 10C0.671573 10 3.2213e-08 9.32843 0 8.5V1.5C0 0.671573 0.671573 0 1.5 0ZM6.5 0C7.32843 0 8 0.671573 8 1.5V8.5C8 9.32843 7.32843 10 6.5 10C5.67157 10 5 9.32843 5 8.5V1.5C5 0.671573 5.67157 0 6.5 0Z" fill="#001A2B"/>
</svg>

    );
};

const WhatsNew: React.FC<WhatsNewBlockProps> = ({title, items, footnote, links, animated}) => {
    return (
        <AnimateBlock className={b()} animate={animated}>
            <div className={b('root')}>
                {title && (
                    <div className={b('head')}>
                        <h2 className={b('title')}>{title}</h2>
                    </div>
                )}
                <ScrollerBlock fullWidth scrollSnapCenter autoScroll>
                    {items.map((item, index) => (
                        <NewsCard key={index} {...item} />
                    ))}
                </ScrollerBlock>
                {(footnote || links?.length) && (
                    <div className={b('footer')}>
                        {footnote && <div className={b('footnote')}>{footnote}</div>}
                        {links?.length ? (
                            <div className={b('links')}>
                                {links.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        className={b('link')}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image src={link.icon} className={b('icon')} />
                                    </a>
                                ))}
                            </div>
                        ) : null}
                    </div>
                )}
            </div>
        </AnimateBlock>
    );
};

export default WhatsNew;
