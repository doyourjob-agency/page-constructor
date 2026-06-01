import React, {useCallback, useMemo, useState} from 'react';

import {AnimateBlock, Odometer} from '../../components';
import {BenchmarkBlockProps} from '../../models';
import {block} from '../../utils';

import './Benchmark.scss';

const b = block('benchmark-block');

const Benchmark: React.FC<BenchmarkBlockProps> = ({
    title,
    text,
    items,
    metricsColor,
    duration,
    animated,
}) => {
    const [playNumbers, setPlayNumbers] = useState(false);
    const handleOnAnimateStart = useCallback(() => setPlayNumbers(true), []);

    const styles = useMemo<React.CSSProperties>(
        () =>
            metricsColor
                ? ({
                      ['--local-items-bg']: metricsColor,
                  } as React.CSSProperties)
                : {},

        [metricsColor],
    );

    return (
        <AnimateBlock className={b()} animate={animated} onAnimateStart={handleOnAnimateStart}>
            <div className={b('root')} style={styles}>
                {title || text ? (
                    <div className={b('head')}>
                        {title && <h2 className={b('title')}>{title}</h2>}
                        {text && <div className={b('text')}>{text}</div>}
                    </div>
                ) : null}
                <div className={b('items')}>
                    {items?.map((item, index) => (
                        <div key={index} className={b('item')}>
                            <div className={b('item-value')}>
                                <Odometer
                                    value={item.value}
                                    initValue={item.init}
                                    duration={duration}
                                    animated={playNumbers}
                                />
                                {item.postfix}
                            </div>
                            {item.text && <div className={b('item-text')}>{item.text}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </AnimateBlock>
    );
};

export default Benchmark;
