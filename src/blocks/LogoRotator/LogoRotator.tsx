import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {Link} from '@gravity-ui/uikit';

import {ImageBase, Title} from '../../components';
import AnimateBlock from '../../components/AnimateBlock/AnimateBlock';
import {BREAKPOINTS} from '../../constants';
import {Grid, Row} from '../../grid';
import useWindowBreakpoint from '../../hooks/useWindowBreakpoint';
import {LogoRotatorBlockProps, TitleItemProps} from '../../models';
import {block} from '../../utils';

import Item from './Item';
import {
    DEFAULT_SWAP_ANIMATION,
    SWAP_ANIMATION_DURATIONS,
    getInitialSlots,
    getLayerModifiers,
} from './utils';
import type {LogoRotatorLayer} from './utils';

import './LogoRotator.scss';

const b = block('logo-rotator-block');

const DEFAULT_MIN_ROTATE_COUNT = 2;
const DEFAULT_MAX_ROTATE_COUNT = 4;

type SlotTransition = {
    from: number;
    to: number;
};

const emptyTransitions = (count: number) =>
    Array<SlotTransition | undefined>(count).fill(undefined);

const pickRandomSlots = (slotIndices: number[], count: number) => {
    const shuffled = [...slotIndices];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, count);
};

export const LogoRotatorBlock = (props: LogoRotatorBlockProps) => {
    const {
        animated,
        title,
        theme,
        items,
        countMobile,
        countDesktop,
        minRotateCount = DEFAULT_MIN_ROTATE_COUNT,
        maxRotateCount = DEFAULT_MAX_ROTATE_COUNT,
        swapAnimation = DEFAULT_SWAP_ANIMATION,
        colSizes,
        rowMode,
    } = props;
    const breakpoint = useWindowBreakpoint();
    const activeCount =
        countDesktop !== undefined && breakpoint >= BREAKPOINTS.md ? countDesktop : countMobile;

    // Индексы логотипов, которые участвуют в ротации (не статичные)
    const rotatableIndices = useMemo(
        () => items.map((item, i) => (item.isStatic ? -1 : i)).filter((i) => i !== -1),
        [items],
    );

    // Инициализация слотов: статичные вставляются в начало, остальные по порядку
    const [slots, setSlots] = useState(() => getInitialSlots(items, activeCount));

    const [transitions, setTransitions] = useState(() => emptyTransitions(activeCount));
    const nextIndexRef = useRef(activeCount - 1);
    const hoveredSlotIndicesRef = useRef(new Set<number>());

    // Держим актуальные slots в ref, чтобы не пересоздавать интервал при каждом изменении
    const slotsRef = useRef(slots);
    useEffect(() => {
        slotsRef.current = slots;
    }, [slots]);

    useEffect(() => {
        const initialSlots = getInitialSlots(items, activeCount);

        slotsRef.current = initialSlots;
        setSlots(initialSlots);
        setTransitions(emptyTransitions(activeCount));
        nextIndexRef.current = activeCount - 1;
        hoveredSlotIndicesRef.current.clear();
    }, [activeCount, items]);

    const handleSlotMouseEnter = useCallback((slotIndex: number) => {
        hoveredSlotIndicesRef.current.add(slotIndex);
    }, []);

    const handleSlotMouseLeave = useCallback((slotIndex: number) => {
        hoveredSlotIndicesRef.current.delete(slotIndex);
    }, []);

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;

        const interval = setInterval(() => {
            const currentSlots = slotsRef.current;

            // Выбираем только не-статичные слоты, на которые не наведен указатель
            const rotatableSlotIndices = currentSlots
                .map((itemIdx, slotIdx) =>
                    items[itemIdx]?.isStatic || hoveredSlotIndicesRef.current.has(slotIdx)
                        ? -1
                        : slotIdx,
                )
                .filter((i) => i !== -1);

            if (rotatableSlotIndices.length === 0) return;

            const rotateMin = Math.min(minRotateCount, maxRotateCount);
            const rotateMax = Math.max(minRotateCount, maxRotateCount);
            const rotateCount = rotateMin + Math.floor(Math.random() * (rotateMax - rotateMin + 1));
            const slotIndices = pickRandomSlots(
                rotatableSlotIndices,
                Math.min(rotateCount, rotatableSlotIndices.length),
            );

            let available = rotatableIndices.filter((i) => !currentSlots.includes(i));
            const blockedTargetSrcs = new Set<string>();
            const nextTransitions: Array<{slotIndex: number} & SlotTransition> = [];

            slotIndices.forEach((slotIndex) => {
                if (available.length === 0) return;

                const currentItemIndex = currentSlots[slotIndex];
                const currentSrc = items[currentItemIndex]?.src;
                const slotAvailable = available.filter((i) => {
                    const src = items[i]?.src;

                    return src !== currentSrc && !blockedTargetSrcs.has(src);
                });

                if (slotAvailable.length === 0) return;

                const newValue = slotAvailable[nextIndexRef.current % slotAvailable.length];

                nextIndexRef.current++;
                available = available.filter((i) => i !== newValue);

                const newSrc = items[newValue]?.src;

                if (newSrc) {
                    blockedTargetSrcs.add(newSrc);
                }

                nextTransitions.push({slotIndex, from: currentItemIndex, to: newValue});
            });

            if (nextTransitions.length === 0) return;

            setTransitions((prev) => {
                const next = [...prev];
                nextTransitions.forEach(({slotIndex, from, to}) => {
                    next[slotIndex] = {from, to};
                });
                return next;
            });

            timeout = setTimeout(() => {
                setSlots((prevSlots) => {
                    const newSlots = [...prevSlots];
                    nextTransitions.forEach(({slotIndex, to}) => {
                        newSlots[slotIndex] = to;
                    });
                    return newSlots;
                });

                setTransitions((prev) => {
                    const next = [...prev];
                    nextTransitions.forEach(({slotIndex}) => {
                        next[slotIndex] = undefined;
                    });
                    return next;
                });
            }, SWAP_ANIMATION_DURATIONS[swapAnimation]);
        }, 2000);

        return () => {
            clearInterval(interval);
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [activeCount, items, maxRotateCount, minRotateCount, rotatableIndices, swapAnimation]);

    const renderItems = useMemo(
        () =>
            slots.map((slot, index) => {
                const transition = transitions[index];
                const item = items[transition?.to ?? slot];
                const previousItem = transition ? items[transition.from] : undefined;

                return (
                    <Item
                        key={index}
                        colSizes={colSizes}
                        url={item.url}
                        src={item.src}
                        previousUrl={previousItem?.url}
                        previousSrc={previousItem?.src}
                        swapAnimation={swapAnimation}
                        onMouseEnter={() => handleSlotMouseEnter(index)}
                        onMouseLeave={() => handleSlotMouseLeave(index)}
                    />
                );
            }),
        [
            colSizes,
            handleSlotMouseEnter,
            handleSlotMouseLeave,
            items,
            slots,
            swapAnimation,
            transitions,
        ],
    );

    const titleProps =
        !title || typeof title === 'string'
            ? ({text: title, textSize: 'l'} as TitleItemProps)
            : title;
    const hasTitle = Boolean(title);

    return (
        <AnimateBlock className={b({theme})} animate={animated}>
            <div className={b('root')}>
                {hasTitle && (
                    <Title title={titleProps} className={b('title')} colSizes={{all: 12}} />
                )}
                {rowMode ? (
                    <div className={b('row-items')}>
                        {slots.map((slot, index) => {
                            const transition = transitions[index];
                            const item = items[transition?.to ?? slot];
                            const previousItem = transition ? items[transition.from] : undefined;

                            if (item === undefined) return null;

                            const renderRowLayer = (
                                layerItem: typeof item,
                                layer: LogoRotatorLayer,
                            ) => {
                                const layerClassName = b(
                                    'logo-layer',
                                    getLayerModifiers(layer, swapAnimation),
                                );

                                if (layerItem.url) {
                                    return (
                                        <Link
                                            href={layerItem.url}
                                            className={`${b('row-item-link')} ${layerClassName}`}
                                        >
                                            <ImageBase
                                                src={layerItem.src}
                                                className={b('image')}
                                                alt=""
                                                aria-hidden="true"
                                            />
                                        </Link>
                                    );
                                }

                                return (
                                    <div className={layerClassName}>
                                        <ImageBase
                                            src={layerItem.src}
                                            className={b('image')}
                                            alt=""
                                            aria-hidden="true"
                                        />
                                    </div>
                                );
                            };

                            const content = (
                                <React.Fragment>
                                    {previousItem && renderRowLayer(previousItem, 'from')}
                                    {renderRowLayer(item, previousItem ? 'to' : 'current')}
                                </React.Fragment>
                            );

                            return (
                                <div
                                    key={index}
                                    className={b('row-item', {swapping: Boolean(previousItem)})}
                                    onMouseEnter={() => handleSlotMouseEnter(index)}
                                    onMouseLeave={() => handleSlotMouseLeave(index)}
                                >
                                    {content}
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <Grid className={b('items')}>
                        <Row className={b('row')}>{renderItems}</Row>
                    </Grid>
                )}
            </div>
        </AnimateBlock>
    );
};

export default LogoRotatorBlock;
