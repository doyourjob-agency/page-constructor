import React from 'react';

import {AnimateBlock, Image} from '../../components';
import TitleItem from '../../components/Title/TitleItem';
import {TitleItemProps, WhatsNewBlockProps} from '../../models';
import NewsCard from '../../sub-blocks/NewsCard/NewsCard';
import {block} from '../../utils';
import ScrollerBlock from '../Scroller/Scroller';

import './WhatsNew.scss';

const b = block('whats-new-block');

const WhatsNew: React.FC<WhatsNewBlockProps> = ({
    title,
    items,
    footnote,
    links,
    animated,
    infinite,
    autoScroll,
    autoScrollInterval,
}) => {
    const titleProps =
        !title || typeof title === 'string'
            ? ({text: title, textSize: 'l'} as TitleItemProps)
            : title;

    return (
        <AnimateBlock className={b()} animate={animated}>
            <div className={b('root')}>
                {title && (
                    <div className={b('head')}>
                        <TitleItem {...titleProps} />
                    </div>
                )}
                <ScrollerBlock
                    fullWidth
                    infinite={infinite}
                    autoScroll={autoScroll ?? true}
                    autoScrollInterval={autoScrollInterval}
                >
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
