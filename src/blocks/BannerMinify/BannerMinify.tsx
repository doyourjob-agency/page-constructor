import React from 'react';

import {Col, Row} from '../../grid';
import {BannerMinifyBlockProps} from '../../models';
import {block} from '../../utils';

import Button from './Button/Button';

import './BannerMinify.scss';

const b = block('banner-minify-block');

const leftColSizes = {lg: 5, all: 12};
const rightColSizes = {lg: 7, all: 12};

export const BannerMinifyBlock = (props: BannerMinifyBlockProps) => {
    const {title, text, buttons, theme} = props;
    return (
        <Row className={b({theme})}>
            <Col sizes={leftColSizes}>
                {title && <div className={b('title')}>{title}</div>}
                {text && <div className={b('text')}>{text}</div>}
            </Col>
            <Col sizes={rightColSizes}>
                <div className={b('buttons')}>
                    {buttons?.map((button, index) => (
                        <Button key={index} {...button} />
                    ))}
                </div>
            </Col>
        </Row>
    );
};
export default BannerMinifyBlock;
