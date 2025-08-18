import React, {useEffect, useRef, useState} from 'react';

import {Link} from '@gravity-ui/uikit';

import {Image} from '../../components';
import AnimateBlock from '../../components/AnimateBlock/AnimateBlock';
import {Col, Grid, Row} from '../../grid';
import {PartnersBlockProps} from '../../models';
import {block} from '../../utils';

import './Partners.scss';

const b = block('partners-block');

export const PartnersBlock = (props: PartnersBlockProps) => {
    const {animated, items, count, colSizes = {all: 3}} = props;
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

    return (
        <AnimateBlock className={b()} animate={animated}>
            <Grid className={b('items')}>
                <Row className={b('row')}>
                    {slots.map((slot, index) => (
                        <Col key={index} sizes={colSizes}>
                            <Link
                                href={items[slot].url}
                                className={b('item', {hidden: hidden[index]})}
                            >
                                <Image
                                    src={items[slot].src}
                                    className={b('image')}
                                    alt=""
                                    aria-hidden="true"
                                />
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Grid>
        </AnimateBlock>
    );
};

export default PartnersBlock;
