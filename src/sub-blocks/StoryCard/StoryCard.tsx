import React from 'react';

import {HTML, Image, Title} from '../../components';
import {Col, Row} from '../../grid';
import {StoryCardProps} from '../../models';
import {block} from '../../utils';

import './StoryCard.scss';

const b = block('story-card');

const columnSizes = {
    all: 12,
    lg: 4,
};

const StoryCard: React.FC<StoryCardProps> = ({
    title,
    text,
    quote,
    logo,
    avatar,
    autor,
    data,
    background,
}) => {
    return (
        <div className={b()}>
            <div className={b('background')} style={{background}} />
            {title && <Title title={title} className={b('title')} />}
            <Row className={b('row')}>
                <Col className={b('col')} sizes={columnSizes}>
                    <div className={b('box')}>
                        <HTML className={b('text')}>{text}</HTML>
                    </div>
                </Col>
                <Col className={b('col')} sizes={columnSizes}>
                    {data?.map((item, index) => (
                        <div key={index} className={b('box', {centered: true})}>
                            <div className={`${b('value')} title-font-family`}>{item.value}</div>
                            <div className={b('label')}>{item.label}</div>
                        </div>
                    ))}
                </Col>
                <Col className={b('col')} sizes={columnSizes}>
                    <div className={b('box', {between: true})}>
                        {logo && (
                            <div className={b('wrap-logo')}>
                                <Image src={logo} className={b('logo')} />
                            </div>
                        )}
                        {quote && <HTML className={b('text')}>{quote}</HTML>}
                        {(avatar || autor) && (
                            <div className={b('autor')}>
                                {avatar && <Image src={avatar} className={b('avatar')} />}
                                {autor && <HTML className={b('text')}>{autor}</HTML>}
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default StoryCard;
