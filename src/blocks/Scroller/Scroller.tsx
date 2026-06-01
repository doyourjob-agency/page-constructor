import React, {useEffect, useRef} from 'react';

import {AnimateBlock} from '../../components';
import {ScrollerBlockProps} from '../../models';
import {block} from '../../utils';

import './Scroller.scss';

const b = block('scroller-block');

export const ScrollerBlock = (
    props: React.PropsWithChildren<Omit<ScrollerBlockProps, 'children'>>,
) => {
    const {animated, widths, gapLong, fullWidth, children} = props;
    const rootRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateSize = () => {
            if (contentRef.current && rootRef.current && fullWidth) {
                const space = (window.innerWidth - rootRef.current.clientWidth) / 2;
                contentRef.current.style.setProperty('padding-left', `${space}px`);
                contentRef.current.style.setProperty('padding-right', `${space}px`);
                contentRef.current.style.setProperty('left', `${-space}px`);
                contentRef.current.style.setProperty('width', `calc(100% + ${2 * space}px)`);
            }
        };

        updateSize();
        window.addEventListener('resize', updateSize, {passive: true});
        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, [fullWidth]);

    return (
        <AnimateBlock className={b({fullWidth})} animate={animated}>
            <div className={b('root')} ref={rootRef}>
                <div className={b('content', {gapLong, fullWidth})} ref={contentRef}>
                    {React.Children.map(children, (child, index) => (
                        <div
                            key={index}
                            className={b('item')}
                            style={{width: widths?.[index] || 'auto'}}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        </AnimateBlock>
    );
};

export default ScrollerBlock;
