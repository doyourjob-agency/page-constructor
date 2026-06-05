import React, {useEffect, useMemo, useRef, useState} from 'react';

import {Link} from '@gravity-ui/uikit';

import {ImageBase, Title} from '../../components';
import AnimateBlock from '../../components/AnimateBlock/AnimateBlock';
import {BREAKPOINTS} from '../../constants';
import {Grid, Row} from '../../grid';
import useWindowBreakpoint from '../../hooks/useWindowBreakpoint';
import {LogoRotatorBlockProps, TitleItemProps} from '../../models';
import {block} from '../../utils';

import Item from './Item';

import './LogoRotator.scss';

const b = block('logo-rotator-block');

const DEFAULT_MIN_ROTATE_COUNT = 2;
const DEFAULT_MAX_ROTATE_COUNT = 4;

const getInitialSlots = (items: LogoRotatorBlockProps['items'], count: number) => {
    const staticIdxList = items.map((item, i) => (item.isStatic ? i : -1)).filter((i) => i !== -1);

    const rotatableIdxList = items
        .map((item, i) => (item.isStatic ? -1 : i))
        .filter((i) => i !== -1);

    const initial: number[] = [];
    let rotatablePointer = 0;

    for (let slot = 0; slot < count; slot++) {
        if (slot < staticIdxList.length) {
            initial.push(staticIdxList[slot]);
        } else {
            initial.push(rotatableIdxList[rotatablePointer++] ?? 0);
        }
    }

    return initial;
};

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
        count,
        desktopCount,
        minRotateCount = DEFAULT_MIN_ROTATE_COUNT,
        maxRotateCount = DEFAULT_MAX_ROTATE_COUNT,
        colSizes,
        rowMode,
    } = props;
    const breakpoint = useWindowBreakpoint();
    const activeCount =
        desktopCount !== undefined && breakpoint >= BREAKPOINTS.md ? desktopCount : count;

    // Индексы логотипов, которые участвуют в ротации (не статичные)
    const rotatableIndices = useMemo(
        () => items.map((item, i) => (item.isStatic ? -1 : i)).filter((i) => i !== -1),
        [items],
    );

    // Инициализация слотов: статичные вставляются в начало, остальные по порядку
    const [slots, setSlots] = useState(() => getInitialSlots(items, activeCount));

    const [hidden, setHidden] = useState(() => Array(activeCount).fill(false));
    const nextIndexRef = useRef(activeCount - 1);
    const isHoveredRef = useRef(false);

    // Держим актуальные slots в ref, чтобы не пересоздавать интервал при каждом изменении
    const slotsRef = useRef(slots);
    useEffect(() => {
        slotsRef.current = slots;
    }, [slots]);

    useEffect(() => {
        setSlots(getInitialSlots(items, activeCount));
        setHidden(Array(activeCount).fill(false));
        nextIndexRef.current = activeCount - 1;
    }, [activeCount, items]);

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;

        const interval = setInterval(() => {
            if (isHoveredRef.current) return;

            // Выбираем только не-статичные слоты для замены
            const rotatableSlotIndices = slotsRef.current
                .map((itemIdx, slotIdx) => (items[itemIdx]?.isStatic ? -1 : slotIdx))
                .filter((i) => i !== -1);

            if (rotatableSlotIndices.length === 0) return;

            const rotateMin = Math.min(minRotateCount, maxRotateCount);
            const rotateMax = Math.max(minRotateCount, maxRotateCount);
            const rotateCount = rotateMin + Math.floor(Math.random() * (rotateMax - rotateMin + 1));
            const slotIndices = pickRandomSlots(
                rotatableSlotIndices,
                Math.min(rotateCount, rotatableSlotIndices.length),
            );

            setHidden((prev) => {
                const next = [...prev];
                slotIndices.forEach((slotIndex) => {
                    next[slotIndex] = true;
                });
                return next;
            });

            timeout = setTimeout(() => {
                setSlots((prevSlots) => {
                    const newSlots = [...prevSlots];
                    let available = rotatableIndices.filter((i) => !newSlots.includes(i));

                    slotIndices.forEach((slotIndex) => {
                        if (available.length === 0) return;

                        const newValue = available[nextIndexRef.current % available.length];
                        nextIndexRef.current++;
                        newSlots[slotIndex] = newValue;
                        available = available.filter((i) => i !== newValue);
                    });

                    return newSlots;
                });

                setHidden((prev) => {
                    const next = [...prev];
                    slotIndices.forEach((slotIndex) => {
                        next[slotIndex] = false;
                    });
                    return next;
                });
            }, 500);
        }, 2000);

        return () => {
            clearInterval(interval);
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [activeCount, items, maxRotateCount, minRotateCount, rotatableIndices]);

    const renderItems = useMemo(
        () =>
            slots.map((slot, index) => (
                <Item
                    key={index}
                    colSizes={colSizes}
                    url={items[slot].url}
                    src={items[slot].src}
                    hidden={hidden[index]}
                />
            )),
        [colSizes, hidden, items, slots],
    );

    const titleProps =
        !title || typeof title === 'string'
            ? ({text: title, textSize: 'l'} as TitleItemProps)
            : title;
    const hasTitle = Boolean(title);

    return (
        <AnimateBlock className={b({theme})} animate={animated}>
            <div
                className={b('root')}
                onMouseEnter={() => {
                    isHoveredRef.current = true;
                }}
                onMouseLeave={() => {
                    isHoveredRef.current = false;
                }}
            >
                {hasTitle && (
                    <Title title={titleProps} className={b('title')} colSizes={{all: 12}} />
                )}
                {rowMode ? (
                    <div className={b('row-items')}>
                        {slots.map((slot, index) => {
                            const item = items[slot];

                            if (!item) return null;

                            if (item.url) {
                                return (
                                    <Link
                                        key={index}
                                        href={item.url}
                                        className={b('row-item', {hidden: hidden[index]})}
                                    >
                                        <ImageBase
                                            src={item.src}
                                            className={b('image')}
                                            alt=""
                                            aria-hidden="true"
                                        />
                                    </Link>
                                );
                            }

                            return (
                                <div key={index} className={b('row-item', {hidden: hidden[index]})}>
                                    <ImageBase
                                        src={item.src}
                                        className={b('image')}
                                        alt=""
                                        aria-hidden="true"
                                    />
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
