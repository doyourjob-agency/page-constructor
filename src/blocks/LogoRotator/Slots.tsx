import React, {useEffect, useRef, useState} from 'react';

import {LogoRotatorBlockProps} from '../../models';

import Item from './Item';

export const Slots = (props: Omit<LogoRotatorBlockProps, 'animated'>) => {
    const {items, count, colSizes} = props;
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
        <React.Fragment>
            {slots.map((slot, index) => (
                <Item
                    key={index}
                    colSizes={colSizes}
                    url={items[slot].url}
                    src={items[slot].src}
                    hidden={hidden[index]}
                />
            ))}
        </React.Fragment>
    );
};

export default Slots;
