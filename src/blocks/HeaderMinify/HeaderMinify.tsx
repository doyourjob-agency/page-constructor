import React from 'react';

import {HTML, Image} from '../../components';
import {parseVideoType} from '../../components/Media/Video/utils';
import {Col, Grid, Row} from '../../grid';
import {HeaderMinifyBlockProps} from '../../models';
import {block} from '../../utils';

import Button from './Button/Button';

import './HeaderMinify.scss';

const b = block('header-minify-block');

const colSizes = {all: 12, md: 9};

export const HeaderMinifyBlock = (props: HeaderMinifyBlockProps) => {
    const {
        title,
        description,
        buttons,
        image,
        video,
        headerSpace,
        verticalOffset,
        verticalOffsetTop,
        verticalOffsetBottom,
    } = props;

    return (
        <header
            className={b({
                ['header-space']: headerSpace,
                'vertical-offset': verticalOffset,
                'vertical-offset-top': verticalOffsetTop,
                'vertical-offset-bottom': verticalOffsetBottom,
                'has-video': Boolean(video),
            })}
        >
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
            {image && (
                <Image
                    containerClassName={b('image-container')}
                    className={b('image')}
                    src={image}
                />
            )}
            <Grid>
                <Row className={b('container')}>
                    <Col sizes={colSizes}>
                        <h1 className={b('title')}>
                            <HTML>{title}</HTML>
                        </h1>
                        {description && <HTML className={b('description')}>{description}</HTML>}
                        {buttons?.length ? (
                            <div className={b('buttons')}>
                                {buttons.map((button, index) => (
                                    <Button key={index} {...button} />
                                ))}
                            </div>
                        ) : null}
                    </Col>
                </Row>
            </Grid>
        </header>
    );
};

export default HeaderMinifyBlock;
