import React from 'react';

import TitleItem from '../../components/Title/TitleItem';
import {Col, Row} from '../../grid';
import {BannerMinifyBlockProps, TitleItemProps} from '../../models';
import {block} from '../../utils';

import Button from './Button/Button';

import './BannerMinify.scss';

const b = block('banner-minify-block');

const leftColSizes = {lg: 5, all: 12};
const rightColSizes = {lg: 7, all: 12};

export const BannerMinifyBlock = (props: BannerMinifyBlockProps) => {
    const {title, text, buttons, theme} = props;

    const titleProps =
        !title || typeof title === 'string' ? ({text: title} as TitleItemProps) : title;

    return (
        <Row className={b({theme})}>
            <Col sizes={leftColSizes}>
                {title && <TitleItem className={b('title')} {...titleProps} />}
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
