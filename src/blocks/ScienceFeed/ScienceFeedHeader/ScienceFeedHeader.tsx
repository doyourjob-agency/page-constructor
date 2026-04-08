import React from 'react';

import {BackgroundImage, HTML, Image} from '../../../components';
import {ScienceFeedHeaderProps} from '../../../models';
import {block} from '../../../utils';

import './ScienceFeedHeader.scss';

const b = block('science-feed-header');

export const ScienceFeedHeader = ({image, title, text, logo, caption}: ScienceFeedHeaderProps) => {
    return (
        <div className={b()}>
            <div className={b('content')}>
                <h1 className={b('title')}>{title}</h1>
                {text && <HTML className={b('text')}>{text}</HTML>}
                <div className={b('wrap')}>
                    <div className={b('caption')}>{caption}</div>
                    <Image src={logo} className={b('logo')} />
                </div>
            </div>
            <BackgroundImage className={b('media')} imageClassName={b('image')} src={image} />
        </div>
    );
};

export default React.memo(ScienceFeedHeader);
