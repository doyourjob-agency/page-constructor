import React, {useEffect, useMemo, useRef, useState} from 'react';

import {Link} from '@gravity-ui/uikit';

import {ImageBase, Title} from '../../components';
import AnimateBlock from '../../components/AnimateBlock/AnimateBlock';
import {Grid, Row} from '../../grid';
import {LogoRotatorBlockProps, TitleItemProps} from '../../models';
import {block} from '../../utils';

import Item from './Item';

import './LogoRotator.scss';

const b = block('logo-rotator-block');

export const LogoRotatorBlock = (props: LogoRotatorBlockProps) => {
    const {animated, title, theme, items, count, colSizes, rowMode} = props;

    // Индексы логотипов, которые участвуют в ротации (не статичные)
    const rotatableIndices = useMemo(
        () => items.map((item, i) => (item.isStatic ? -1 : i)).filter((i) => i !== -1),
        [items],
    );

    // Инициализация слотов: статичные вставляются в начало, остальные по порядку
    const [slots, setSlots] = useState(() => {
        const staticIdxList = items
            .map((item, i) => (item.isStatic ? i : -1))
            .filter((i) => i !== -1);

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
    });

    const [hidden, setHidden] = useState(() => Array(count).fill(false));
    const nextIndexRef = useRef(count - 1);

    // Держим актуальные slots в ref, чтобы не пересоздавать интервал при каждом изменении
    const slotsRef = useRef(slots);
    useEffect(() => {
        slotsRef.current = slots;
    }, [slots]);

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;

        const interval = setInterval(() => {
            // Выбираем только не-статичные слоты для замены
            const rotatableSlotIndices = slotsRef.current
                .map((itemIdx, slotIdx) => (items[itemIdx]?.isStatic ? -1 : slotIdx))
                .filter((i) => i !== -1);

            if (rotatableSlotIndices.length === 0) return;

            const slotIndex =
                rotatableSlotIndices[Math.floor(Math.random() * rotatableSlotIndices.length)];

            setHidden((prev) => {
                const next = [...prev];
                next[slotIndex] = true;
                return next;
            });

            timeout = setTimeout(() => {
                setSlots((prevSlots) => {
                    const newSlots = [...prevSlots];
                    // Доступные для показа — только ротируемые, не отображаемые сейчас
                    const available = rotatableIndices.filter((i) => !newSlots.includes(i));

                    if (available.length > 0) {
                        const newValue = available[nextIndexRef.current % available.length];
                        nextIndexRef.current++;
                        newSlots[slotIndex] = newValue;
                    }
                    return newSlots;
                });

                setHidden((prev) => {
                    const next = [...prev];
                    next[slotIndex] = false;
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
    }, [count, items, rotatableIndices]);

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
            <div className={b('root')}>
                {hasTitle && (
                    <Title title={titleProps} className={b('title')} colSizes={{all: 12}} />
                )}
                {rowMode ? (
                    <div className={b('row-items')}>
                        {slots.map((slot, index) => (
                            <Link
                                key={index}
                                href={items[slot].url}
                                className={b('row-item', {hidden: hidden[index]})}
                            >
                                <ImageBase
                                    src={items[slot].src}
                                    className={b('image')}
                                    alt=""
                                    aria-hidden="true"
                                />
                            </Link>
                        ))}
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
