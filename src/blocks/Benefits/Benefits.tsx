import React, {useMemo} from 'react';

import {AnimateBlock, Image} from '../../components';
import {parseVideoType} from '../../components/Media/Video/utils';
import {Col, Row} from '../../grid';
import {BenefitsBlockProps} from '../../models';
import {block} from '../../utils';

import './Benefits.scss';

const b = block('benefits-block');

const colSizesLeft = {all: 12, lg: 7, xl: 9};
const colSizesRight = {all: 12, lg: 5, xl: 3};

export const BenefitsBlock = (props: BenefitsBlockProps) => {
    const {animated, title, text, video, items, itemBackground, theme} = props;

    const styles = useMemo<React.CSSProperties>(
        () =>
            itemBackground
                ? ({
                      ['--local-item-bg']: itemBackground,
                  } as React.CSSProperties)
                : {},

        [itemBackground],
    );

    return (
        <AnimateBlock className={b({theme})} animate={animated}>
            <div className={b('root')} style={styles}>
                {title || text ? (
                    <div className={b('head')}>
                        {title && <h2 className={b('title')}>{title}</h2>}
                        {text && <div className={b('text')}>{text}</div>}
                    </div>
                ) : null}
                <Row>
                    <Col sizes={colSizesLeft}>
                        {video && (
                            <video
                                disablePictureInPicture
                                playsInline
                                // @ts-ignore
                                // eslint-disable-next-line react/no-unknown-property
                                pip="false"
                                autoPlay
                                loop
                                preload="auto"
                                muted
                                className={b('video')}
                            >
                                <source src={video} type={parseVideoType(video)} />
                            </video>
                        )}
                    </Col>
                    <Col sizes={colSizesRight}>
                        <div className={b('items')}>
                            {items?.map((item, index) => (
                                <div key={index} className={b('item')}>
                                    <Image className={b('item-image')} src={item.icon} alt="icon" />
                                    <div className={b('item-text')}>{item.text}</div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </div>
        </AnimateBlock>
    );
};

export default BenefitsBlock;
