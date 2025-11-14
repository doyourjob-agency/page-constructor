import React, {useCallback, useState} from 'react';

import {Text} from '@gravity-ui/uikit';

import {AnimateBlock, Odometer, Title} from '../../components';
import {Col, Grid, Row} from '../../grid';
import {BenchmarkBlockProps} from '../../models';
import {block} from '../../utils';

import './Benchmark.scss';

const b = block('benchmark-block');

const defaultSizes = {all: 12};

const Benchmark: React.FC<BenchmarkBlockProps> = ({title, data, duration, animated}) => {
    const [playNumbers, setPlayNumbers] = useState(false);
    const handleOnAnimateStart = useCallback(() => setPlayNumbers(true), []);

    return (
        <AnimateBlock className={b()} animate={animated} onAnimateStart={handleOnAnimateStart}>
            {title && <Title title={title} className={b('title')} />}
            <Grid className={b('content')}>
                <Row>
                    {data.map((column, columnIndex) => (
                        <Col
                            key={columnIndex}
                            sizes={column.sizes || defaultSizes}
                            className={b('wrap')}
                        >
                            {column.title && (
                                <Text variant="header-2" className={b('wrap-title')}>
                                    {column.title}
                                </Text>
                            )}
                            <div className={b('wrap-inner')}>
                                {column.items.map((item, index) => (
                                    <div key={index} className={b('item')}>
                                        {item.top && (
                                            <Text variant="body-1" className={b('label')}>
                                                {item.top}
                                            </Text>
                                        )}
                                        <div className={b('value')}>
                                            <Odometer
                                                value={item.value}
                                                initValue={item.init}
                                                duration={duration}
                                                animated={playNumbers}
                                            />
                                            {item.postfix}
                                        </div>
                                        {item.bottom && (
                                            <Text variant="body-1" className={b('label')}>
                                                {item.bottom}
                                            </Text>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Col>
                    ))}
                </Row>
            </Grid>
        </AnimateBlock>
    );
};

export default Benchmark;
