import React, {useEffect, useRef, useState} from 'react';

import {AnimateBlock} from '../../components';
import {BREAKPOINTS} from '../../constants';
import {ScrollerBlockProps} from '../../models';
import {block} from '../../utils';

import './Scroller.scss';

const b = block('scroller-block');

const PlayIcon = () => {
    return (
        <svg
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.26306 0.210836L8.81342 4.08111C9.79579 4.66154 9.7961 6.08277 8.81398 6.66363L2.26943 10.5343C1.26995 11.1254 0.00671091 10.4055 0.00583857 9.24433L2.32602e-05 1.50339C-0.000849622 0.341466 1.2627 -0.380223 2.26306 0.210836Z"
                fill="#001A2B"
            />
        </svg>
    );
};

const PauseIcon = () => {
    return (
        <svg
            width="8"
            height="10"
            viewBox="0 0 8 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1.5 0C2.32843 0 3 0.671573 3 1.5V8.5C3 9.32843 2.32843 10 1.5 10C0.671573 10 3.2213e-08 9.32843 0 8.5V1.5C0 0.671573 0.671573 0 1.5 0ZM6.5 0C7.32843 0 8 0.671573 8 1.5V8.5C8 9.32843 7.32843 10 6.5 10C5.67157 10 5 9.32843 5 8.5V1.5C5 0.671573 5.67157 0 6.5 0Z"
                fill="#001A2B"
            />
        </svg>
    );
};

export const ScrollerBlock = (
    props: React.PropsWithChildren<Omit<ScrollerBlockProps, 'children'>>,
) => {
    const {
        animated,
        widths,
        gapLong,
        fullWidth,
        scrollSnapCenter,
        children,
        autoScroll,
        autoScrollInterval = 3000,
    } = props;
    const rootRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [currentElement, setCurrentElement] = useState<number>(0);
    const [isPaused, setIsPaused] = useState<boolean>(true);

    useEffect(() => {
        const updateSize = () => {
            const content = contentRef.current;
            const root = rootRef.current;

            if (!content || !root) {
                return;
            }

            if (fullWidth) {
                const space = (window.innerWidth - root.clientWidth) / 2;
                content.style.setProperty('padding-left', `${space}px`);
                content.style.setProperty('padding-right', `${space}px`);
                content.style.setProperty('left', `${-space}px`);
                content.style.setProperty('width', `calc(100% + ${2 * space}px)`);
            }

            if (scrollSnapCenter && window.innerWidth >= BREAKPOINTS.md) {
                content.style.setProperty('--scroller-edge-margin', `${content.clientWidth / 3}px`);
            } else {
                content.style.removeProperty('--scroller-edge-margin');
            }
        };

        const determineCurrentElement = () => {
            const content = contentRef.current;
            const childCount = content?.children?.length || 0;

            if (!content || childCount <= 1) {
                return;
            }

            const currentMidLine = content.clientWidth / 2;

            [...content.children].find((child, index) => {
                const childRect = child.getBoundingClientRect();
                if (currentMidLine > childRect.left && currentMidLine < childRect.right) {
                    setCurrentElement(index);
                    return true;
                }
                return false;
            });
        };

        updateSize();
        determineCurrentElement();
        window.addEventListener('resize', updateSize, {passive: true});
        contentRef.current?.addEventListener('scroll', determineCurrentElement, {passive: true});
        return () => {
            window.removeEventListener('resize', updateSize);
            contentRef.current?.removeEventListener('scroll', determineCurrentElement);
        };
    }, [fullWidth, scrollSnapCenter]);

    useEffect(() => {
        setIsPaused(false);
    }, []);

    const scrollToNext = () => {
        const content = contentRef.current;
        if (!content) {
            return;
        }
        const nextIndex = (currentElement + 1) % childCount;
        const nextElement = content.children[nextIndex] as HTMLElement;
        const nextIndexLeft =
            nextElement.offsetLeft - (content.offsetWidth - nextElement.offsetWidth) / 2;
        content.scrollTo({left: nextIndexLeft, behavior: 'smooth'});
    };

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;
        if (!isPaused) {
            timeout = setTimeout(() => {
                scrollToNext();
            }, autoScrollInterval);
        }
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [isPaused, currentElement]);

    const childCount = React.Children.count(children);

    return (
        <AnimateBlock className={b({fullWidth})} animate={animated}>
            <div className={b('root')} ref={rootRef}>
                <div
                    className={b('content', {gapLong, fullWidth, scrollSnapCenter})}
                    ref={contentRef}
                >
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
            {autoScroll && childCount > 0 && (
                <div className={b('pagination-container')}>
                    <div className={b('pagination')}>
                        {Array.from({length: childCount}, (_, index) => (
                            <div
                                key={index}
                                className={b('pip', {active: index === currentElement})}
                            >
                                <div
                                    style={{
                                        transition: `width ${autoScrollInterval}ms, opacity 0.5s ease`,
                                    }}
                                    className={b('pip-inner', {
                                        active: index === currentElement,
                                        paused: isPaused,
                                    })}
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        className={b('pagination-button')}
                        onClick={() => setIsPaused(!isPaused)}
                    >
                        <div className={b('pagination-button-icon')}>
                            {isPaused ? <PlayIcon /> : <PauseIcon />}
                        </div>
                    </button>
                </div>
            )}
        </AnimateBlock>
    );
};

export default ScrollerBlock;
