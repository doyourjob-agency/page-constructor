import React, {useEffect, useMemo, useRef, useState} from 'react';

import AnimateBlock from '../../components/AnimateBlock/AnimateBlock';
import TitleItem from '../../components/Title/TitleItem';
import {Grid, Row} from '../../grid';
import {LogoRotatorBlockProps, TitleItemProps} from '../../models';
import {block} from '../../utils';

import Item from './Item';

import './LogoRotator.scss';

const b = block('logo-rotator-block');

export const LogoRotatorBlock = (props: LogoRotatorBlockProps) => {
    const {animated, title, theme, items, count, colSizes} = props;
    const [slots, setSlots] = useState(new Array(count).fill(0).map((_, index) => index));
    const [hidden, setHidden] = useState(() => Array(count).fill(false));
    const nextIndexRef = useRef(count - 1);

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;
        const interval = setInterval(() => {
            const slotIndex = Math.floor(Math.random() * count);
            setHidden((prev) => {
                const next = [...prev];
                next[slotIndex] = true;
                return next;
            });

            timeout = setTimeout(() => {
                setSlots((prevSlots) => {
                    const newSlots = [...prevSlots];
                    const available = items.map((_, i) => i).filter((i) => !newSlots.includes(i));

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
    }, [count, items]);

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
        !title || typeof title === 'string' ? ({text: title} as TitleItemProps) : title;

    return (
        <AnimateBlock className={b({theme})} animate={animated}>
            <TitleItem className={b('title')} {...titleProps} />
            <Grid className={b('items')}>
                <Row className={b('row')}>{renderItems}</Row>
            </Grid>
        </AnimateBlock>
    );
};

export default LogoRotatorBlock;
