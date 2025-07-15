import React, {useEffect, useMemo, useRef, useState} from 'react';

import {SwitchingTitleProps} from '../../../models';
import {block} from '../../../utils';
import {partitionSwitchingTitleInput} from '../utils';

import './SwitchingTitle.scss';

const b = block('switching-title');

const SwitchingTitle = (props: SwitchingTitleProps) => {
    const {text, switchingTime} = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

    const texts = useMemo(() => partitionSwitchingTitleInput(text), [text]);

    const textSizesCommonMultiple = useMemo(
        () => texts.reduce((acc, curr) => acc * curr.length, 1),
        [texts],
    );

    const clearAllTimeouts = () => {
        timeoutsRef.current.forEach(clearTimeout);
        timeoutsRef.current = [];
    };

    useEffect(() => {
        clearAllTimeouts();

        const intervalHandle = setInterval(() => {
            setOpacity(0);
            const timeout = setTimeout(() => {
                setCurrentIndex((c) => (c + 1) % textSizesCommonMultiple);
                setOpacity(1);
            }, 200);
            timeoutsRef.current.push(timeout);
        }, switchingTime);

        return () => {
            clearInterval(intervalHandle);
            clearAllTimeouts();
        };
    }, [texts, switchingTime, textSizesCommonMultiple]);

    return (
        <span>
            {texts.map((lines, index) => (
                <span
                    className={b('title-part')}
                    style={{
                        opacity: lines.length > 1 ? opacity : 1,
                    }}
                    key={index}
                >
                    {lines[currentIndex % lines.length]}
                </span>
            ))}
        </span>
    );
};

export default SwitchingTitle;
