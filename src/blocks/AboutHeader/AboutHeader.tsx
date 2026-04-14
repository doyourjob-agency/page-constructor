import React from 'react';

import {Image, YFMWrapper} from '../../components';
import {Col, Row} from '../../grid';
import {AboutHeaderBlockProps} from '../../models';
import {block} from '../../utils/cn';

import './AboutHeader.scss';

const b = block('about-header-block');

const leftColumn = {all: 12, md: 6};
const rightColumn = {all: 12, md: 6};

const AboutHeaderBlock = ({title, text, caption, image, logo}: AboutHeaderBlockProps) => {
    return (
        <div className={b()}>
            <Row>
                <Col sizes={rightColumn} className={b('left')}>
                    <Image src={image} className={b('img')} />
                </Col>
                <Col sizes={leftColumn} className={b('right')}>
                    <div className={b('content')}>
                        <h1 className={b('title')}>{title}</h1>
                        <div className={b('wrap')}>
                            <div className={b('caption')}>{caption}</div>
                            <Image src={logo} className={b('logo')} />
                        </div>
                        {text && (
                            <YFMWrapper
                                content={text}
                                modifiers={{constructor: true}}
                                className={b('text')}
                            />
                        )}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default React.memo(AboutHeaderBlock);
