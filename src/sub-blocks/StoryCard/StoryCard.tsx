import React from 'react';

import {HTML, Image} from '../../components';
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
    tag,
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
            <div className={b('head')}>
                {title && <div className={b('title')}>{title}</div>}
                {tag && <div className={b('tag')}>{tag}</div>}
            </div>
            <Row className={b('row')}>
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
                <Col className={b('col')} sizes={columnSizes}>
                    {data?.map((item, index) => (
                        <div key={index} className={b('box', {centered: true})}>
                            <div className={`${b('value')} title-font-family`}>{item.value}</div>
                            <div className={b('label')}>{item.label}</div>
                        </div>
                    ))}
                </Col>
                <Col className={b('col')} sizes={columnSizes}>
                    <div className={b('box', {text: true})}>
                        <HTML className={b('text')}>{text}</HTML>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default StoryCard;
