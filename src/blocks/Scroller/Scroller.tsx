import React, {useEffect, useRef} from 'react';

import {ScrollerBlockProps} from '../../models';
import {block} from '../../utils';

import './Scroller.scss';

const b = block('scroller-block');

export const ScrollerBlock = (
    props: React.PropsWithChildren<Omit<ScrollerBlockProps, 'children'>>,
) => {
    const {title, text, widths, gapLong, children} = props;
    const rootRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateSize = () => {
            if (contentRef.current && rootRef.current) {
                const space = (window.innerWidth - rootRef.current.clientWidth) / 2;
                contentRef.current.style.setProperty('padding-left', `${space}px`);
                contentRef.current.style.setProperty('padding-right', `${space}px`);
                contentRef.current.style.setProperty('left', `${-space}px`);
            }
        };

        updateSize();
        window.addEventListener('resize', updateSize, {passive: true});
        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, []);

    return (
        <div className={b()} ref={rootRef}>
            {(title || text) && (
                <div className={b('header')}>
                    {title && <div className={b('title')}>{title}</div>}
                    {text && <div className={b('text')}>{text}</div>}
                </div>
            )}
            <div className={b('content', {gapLong})} ref={contentRef}>
                {React.Children.map(children, (child, index) => (
                    <div
                        key={index}
                        className={b('item')}
                        style={{width: widths?.[index] || '100%'}}
                    >
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScrollerBlock;
