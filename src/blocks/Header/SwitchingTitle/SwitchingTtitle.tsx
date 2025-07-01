import React, {useEffect, useMemo, useState} from 'react';

import {SwitchingTitleProps} from '../../../models';
import {block} from '../../../utils';
import {partitionSwitchingTitleInput} from '../utils';

import './SwitchingTitle.scss';

const b = block('switching-title');

const SwitchingTitle = (props: SwitchingTitleProps) => {
    const {text, switchingTime} = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);

    const texts = useMemo(() => partitionSwitchingTitleInput(text), [text]);

    useEffect(() => {
        const textSizesCommonMultiple = texts.reduce((acc, curr) => acc * curr.length, 1);
        const intervalHandle = setInterval(() => {
            setOpacity(0);
            setTimeout(() => {
                setCurrentIndex((c) => (c + 1) % textSizesCommonMultiple);
                setOpacity(1);
            }, 200);
        }, switchingTime);

        return () => clearInterval(intervalHandle);
    }, [texts, switchingTime]);

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
