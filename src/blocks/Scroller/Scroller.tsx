import React, {useCallback, useEffect, useRef, useState} from 'react';

import {AnimateBlock} from '../../components';
import {ScrollerBlockProps} from '../../models';
import {block} from '../../utils';

import './Scroller.scss';

const b = block('scroller-block');

const getChild = (parent: HTMLElement, index: number): HTMLElement | null => {
    const child = parent.children[index];
    return child instanceof HTMLElement ? child : null;
};

const getCenteredChildIndex = (content: HTMLElement): number => {
    const midLine = content.getBoundingClientRect().left + content.clientWidth / 2;

    for (let i = 0; i < content.children.length; i++) {
        const rect = content.children[i].getBoundingClientRect();
        if (rect.left <= midLine && rect.right >= midLine) {
            return i;
        }
    }

    return 0;
};

const scrollToChild = (
    content: HTMLElement,
    child: HTMLElement,
    behavior: ScrollBehavior = 'smooth',
) => {
    const left = child.offsetLeft - (content.offsetWidth - child.offsetWidth) / 2;
    content.scrollTo({left, behavior});
};

const MIDDLE_COPY = 1;

const normalizeToMiddleCopy = (content: HTMLElement, childCount: number): boolean => {
    const centeredIndex = getCenteredChildIndex(content);
    const logicalIndex = centeredIndex % childCount;
    const currentCopy = Math.floor(centeredIndex / childCount);

    if (currentCopy === MIDDLE_COPY) {
        return false;
    }

    const middleChild = getChild(content, childCount + logicalIndex);
    if (middleChild) {
        scrollToChild(content, middleChild, 'auto');
    }

    return true;
};

const getTargetPhysicalIndex = (
    centeredPhysicalIndex: number,
    targetLogicalIndex: number,
    childCount: number,
    preferForward: boolean,
): number => {
    const currentLogical = centeredPhysicalIndex % childCount;
    const forwardSteps = (targetLogicalIndex - currentLogical + childCount) % childCount;
    const backwardSteps = (currentLogical - targetLogicalIndex + childCount) % childCount;

    if (preferForward || forwardSteps <= backwardSteps) {
        if (forwardSteps === 0) {
            return MIDDLE_COPY * childCount + targetLogicalIndex;
        }

        return centeredPhysicalIndex + forwardSteps;
    }

    if (backwardSteps === 0) {
        return MIDDLE_COPY * childCount + targetLogicalIndex;
    }

    return centeredPhysicalIndex - backwardSteps;
};

const SCROLL_IDLE_MS = 200;
const NORMALIZE_BEFORE_SNAP_MS = 100;

const scrollToMiddleCopyIndex = (
    content: HTMLElement,
    targetLogicalIndex: number,
    childCount: number,
) => {
    const runScroll = () => {
        const targetChild = getChild(content, childCount + targetLogicalIndex);

        if (targetChild) {
            scrollToChild(content, targetChild);
        }
    };

    if (normalizeToMiddleCopy(content, childCount)) {
        requestAnimationFrame(runScroll);
        return;
    }

    runScroll();
};

const scrollToLogicalIndex = (
    content: HTMLElement,
    targetLogicalIndex: number,
    childCount: number,
    preferForward: boolean,
) => {
    const runScroll = () => {
        const centeredIndex = getCenteredChildIndex(content);
        const targetPhysical = getTargetPhysicalIndex(
            centeredIndex,
            targetLogicalIndex,
            childCount,
            preferForward,
        );
        const targetChild = getChild(content, targetPhysical);

        if (targetChild) {
            scrollToChild(content, targetChild);
        }
    };

    if (normalizeToMiddleCopy(content, childCount)) {
        requestAnimationFrame(runScroll);
        return;
    }

    runScroll();
};

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
        children,
        autoScroll = true,
        autoScrollInterval = 3000,
        infinite = false,
    } = props;

    const childCount = React.Children.count(children);

    const rootRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [currentElement, setCurrentElement] = useState<number>(0);
    const [isPaused, setIsPaused] = useState<boolean>(true);
    const [scrollInProgress, setScrollInProgress] = useState<boolean>(false);
    const scrollIdleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const normalizeSettleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const scrollInProgressRef = useRef<boolean>(false);
    const isNormalizingRef = useRef<boolean>(false);

    useEffect(() => {
        const content = contentRef.current;
        const root = rootRef.current;

        const updateSize = () => {
            if (!content || !root) {
                return;
            }

            if (fullWidth) {
                const space = (document.documentElement.clientWidth - root.clientWidth) / 2;
                content.style.setProperty('padding-left', `${space}px`);
                content.style.setProperty('padding-right', `${space}px`);
                content.style.setProperty('left', `${-space}px`);
                content.style.setProperty('width', `calc(100% + ${2 * space}px)`);
            }
        };

        const determineCurrentElement = () => {
            if (!content || childCount <= 1) {
                return;
            }

            setCurrentElement(getCenteredChildIndex(content) % childCount);
        };

        updateSize();
        determineCurrentElement();
        window.addEventListener('resize', updateSize, {passive: true});
        content?.addEventListener('scroll', determineCurrentElement, {passive: true});
        return () => {
            window.removeEventListener('resize', updateSize);
            content?.removeEventListener('scroll', determineCurrentElement);
        };
    }, [fullWidth, childCount, children]);

    useEffect(() => {
        const content = contentRef.current;
        if (!content || !infinite || childCount <= 1) {
            return () => {};
        }

        const middleCenterIndex = Math.floor(childCount * 1.5);
        const copyStartIndex = childCount;
        const endCopyStartIndex = childCount * 2;

        const scrollToMiddle = () => {
            const middleChild = getChild(content, middleCenterIndex);
            if (middleChild) {
                content.scrollTo(
                    middleChild.offsetLeft + content.offsetWidth / 2 - middleChild.offsetWidth / 2,
                    0,
                );
            }
        };

        const handleInfiniteScroll = () => {
            if (isNormalizingRef.current) {
                return;
            }

            const wasNotInProgress = !scrollInProgressRef.current;
            if (wasNotInProgress) {
                isNormalizingRef.current = true;
                normalizeToMiddleCopy(content, childCount);
                isNormalizingRef.current = false;
            }

            const scrollLeft = content.scrollLeft;
            const endCopyChild = getChild(content, endCopyStartIndex);
            const copyStartChild = getChild(content, copyStartIndex);

            if (endCopyChild && scrollLeft > endCopyChild.offsetLeft) {
                const delta = endCopyChild.offsetLeft - scrollLeft;
                const resetChild = getChild(content, copyStartIndex);
                if (resetChild) {
                    content.scrollTo(resetChild.offsetLeft + delta, 0);
                }
            }

            if (copyStartChild && scrollLeft < copyStartChild.offsetLeft - content.clientWidth) {
                const endChild = getChild(content, endCopyStartIndex);
                if (endChild) {
                    content.scrollTo(endChild.offsetLeft - content.clientWidth, 0);
                }
            }

            scrollInProgressRef.current = true;
            setScrollInProgress(true);
            if (scrollIdleTimeoutRef.current) {
                clearTimeout(scrollIdleTimeoutRef.current);
            }
            if (normalizeSettleTimeoutRef.current) {
                clearTimeout(normalizeSettleTimeoutRef.current);
            }
            scrollIdleTimeoutRef.current = setTimeout(() => {
                isNormalizingRef.current = true;
                normalizeToMiddleCopy(content, childCount);
                isNormalizingRef.current = false;
                normalizeSettleTimeoutRef.current = setTimeout(() => {
                    scrollInProgressRef.current = false;
                    setScrollInProgress(false);
                }, NORMALIZE_BEFORE_SNAP_MS);
            }, SCROLL_IDLE_MS);
        };

        content.addEventListener('scroll', handleInfiniteScroll, {passive: true});
        scrollToMiddle();

        return () => {
            content.removeEventListener('scroll', handleInfiniteScroll);
            if (scrollIdleTimeoutRef.current) {
                clearTimeout(scrollIdleTimeoutRef.current);
            }
            if (normalizeSettleTimeoutRef.current) {
                clearTimeout(normalizeSettleTimeoutRef.current);
            }
        };
    }, [infinite, childCount]);

    useEffect(() => {
        if (autoScroll) {
            setIsPaused(false);
        }
    }, [autoScroll]);

    const scrollToNext = useCallback(() => {
        const content = contentRef.current;
        if (!content || childCount <= 1) {
            return;
        }

        if (infinite) {
            const nextLogical = ((getCenteredChildIndex(content) % childCount) + 1) % childCount;
            scrollToLogicalIndex(content, nextLogical, childCount, true);
            return;
        }

        const nextIndex = (currentElement + 1) % childCount;
        const nextElement = getChild(content, nextIndex);
        if (nextElement) {
            scrollToChild(content, nextElement);
        }
    }, [childCount, currentElement, infinite]);

    const scrollToPaginationIndex = useCallback(
        (targetIndex: number) => {
            if (autoScroll) {
                setIsPaused(true);
            }

            const content = contentRef.current;
            if (!content || childCount <= 1 || targetIndex < 0 || targetIndex >= childCount) {
                return;
            }

            if (!infinite) {
                const child = getChild(content, targetIndex);
                if (child) {
                    scrollToChild(content, child);
                }
                return;
            }

            scrollToMiddleCopyIndex(content, targetIndex, childCount);
        },
        [autoScroll, childCount, infinite],
    );

    const scrollToItemIndex = useCallback(
        (targetIndex: number) => {
            if (autoScroll) {
                setIsPaused(true);
            }

            const content = contentRef.current;
            if (!content || childCount <= 1 || targetIndex < 0 || targetIndex >= childCount) {
                return;
            }

            if (!infinite) {
                const child = getChild(content, targetIndex);
                if (child) {
                    scrollToChild(content, child);
                }
                return;
            }

            const logicalIndex = getCenteredChildIndex(content) % childCount;
            const isNext = targetIndex === (logicalIndex + 1) % childCount;
            scrollToLogicalIndex(content, targetIndex, childCount, isNext);
        },
        [autoScroll, childCount, infinite],
    );

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;
        if (autoScroll && !isPaused) {
            timeout = setTimeout(() => {
                scrollToNext();
            }, autoScrollInterval);
        }
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [autoScroll, isPaused, currentElement, autoScrollInterval, scrollToNext]);

    return (
        <AnimateBlock className={b({fullWidth})} animate={animated}>
            <div className={b('root')} ref={rootRef}>
                <div
                    className={b('content', {
                        gapLong,
                        fullWidth,
                        'scroll-snap-center': infinite ? !scrollInProgress : true,
                    })}
                    ref={contentRef}
                >
                    {(infinite ? [0, 1, 2] : [0])
                        .map((mi) =>
                            React.Children.map(children, (child, index) => {
                                const physicalIndex = mi * childCount + index;

                                return (
                                    <div
                                        key={physicalIndex}
                                        role="button"
                                        tabIndex={0}
                                        className={b('item')}
                                        style={{width: widths?.[index] || 'auto'}}
                                        onClick={() => scrollToItemIndex(index)}
                                        onKeyDown={(event) => {
                                            if (event.key === 'Enter' || event.key === ' ') {
                                                event.preventDefault();
                                                scrollToItemIndex(index);
                                            }
                                        }}
                                    >
                                        {child}
                                    </div>
                                );
                            }),
                        )
                        .flat()}
                </div>
            </div>
            {childCount > 0 && (
                <div className={b('pagination-container')}>
                    <div className={b('pagination')}>
                        {Array.from({length: childCount}, (_, index) => (
                            <div
                                key={index}
                                role="button"
                                tabIndex={0}
                                className={b('pip', {active: index === currentElement})}
                                onClick={() => scrollToPaginationIndex(index)}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter' || event.key === ' ') {
                                        event.preventDefault();
                                        scrollToPaginationIndex(index);
                                    }
                                }}
                            >
                                {autoScroll && (
                                    <div
                                        style={{
                                            transition: `width ${autoScrollInterval}ms, opacity 0.5s ease`,
                                        }}
                                        className={b('pip-inner', {
                                            active: index === currentElement,
                                            paused: isPaused,
                                        })}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    {autoScroll && (
                        <button
                            className={b('pagination-button')}
                            onClick={() => setIsPaused(!isPaused)}
                        >
                            {isPaused ? <PlayIcon /> : <PauseIcon />}
                        </button>
                    )}
                </div>
            )}
        </AnimateBlock>
    );
};

export default ScrollerBlock;
