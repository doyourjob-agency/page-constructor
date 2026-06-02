import React, {useCallback, useEffect, useRef, useState} from 'react';

import {AnimateBlock} from '../../components';
import {BREAKPOINTS} from '../../constants';
import {ScrollerBlockProps} from '../../models';
import {block} from '../../utils';

import './Scroller.scss';

const b = block('scroller-block');

const PlayIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
        >
            <path
                d="M13.765 9.83831L20.3154 13.7086C21.2977 14.289 21.298 15.7102 20.3159 16.2911L13.7714 20.1618C12.7719 20.7529 11.5086 20.033 11.5078 18.8718L11.502 11.1309C11.5011 9.96894 12.7646 9.24725 13.765 9.83831Z"
                fill="currentColor"
            />
        </svg>
    );
};

const PauseIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
        >
            <path
                d="M12.5 10C13.3284 10 14 10.6716 14 11.5V18.5C14 19.3284 13.3284 20 12.5 20C11.6716 20 11 19.3284 11 18.5V11.5C11 10.6716 11.6716 10 12.5 10ZM17.5 10C18.3284 10 19 10.6716 19 11.5V18.5C19 19.3284 18.3284 20 17.5 20C16.6716 20 16 19.3284 16 18.5V11.5C16 10.6716 16.6716 10 17.5 10Z"
                fill="currentColor"
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
        const content = contentRef.current;
        const root = rootRef.current;

        const updateSize = () => {
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
        content?.addEventListener('scroll', determineCurrentElement, {passive: true});
        return () => {
            window.removeEventListener('resize', updateSize);
            content?.removeEventListener('scroll', determineCurrentElement);
        };
    }, [fullWidth, scrollSnapCenter]);

    useEffect(() => {
        if (autoScroll) {
            setIsPaused(false);
        }
    }, [autoScroll]);

    const childCount = React.Children.count(children);

    const scrollToNext = useCallback(() => {
        const content = contentRef.current;
        if (!content) {
            return;
        }
        const nextIndex = (currentElement + 1) % childCount;
        const nextElement = content.children[nextIndex] as HTMLElement;
        const nextIndexLeft =
            nextElement.offsetLeft - (content.offsetWidth - nextElement.offsetWidth) / 2;
        content.scrollTo({left: nextIndexLeft, behavior: 'smooth'});
    }, [childCount, currentElement]);

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
    }, [isPaused, currentElement, autoScrollInterval, scrollToNext]);

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
                        {isPaused ? <PlayIcon /> : <PauseIcon />}
                    </button>
                </div>
            )}
        </AnimateBlock>
    );
};

export default ScrollerBlock;
