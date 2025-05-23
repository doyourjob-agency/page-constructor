import React from 'react';

import {ButtonSize} from '@gravity-ui/uikit';

import {MediaContentProps} from '../../models';
import {Content} from '../../sub-blocks';
import {block} from '../../utils';

import './MediaBaseContent.scss';

const b = block('media-base-content');

const MediaContent = (props: MediaContentProps) => {
    const {
        title,
        description,
        subtitle,
        subtitleLinks,
        button,
        links,
        buttons = [],
        additionalInfo,
        size = 'l',
        list,
    } = props;
    const allButtons = button ? [{...button, size: 'xl' as ButtonSize}, ...buttons] : buttons;
    return (
        <div className={b()}>
            <Content
                title={title}
                text={description}
                subtitle={subtitle}
                subtitleLinks={subtitleLinks}
                links={links}
                theme="default"
                buttons={allButtons}
                list={list}
                additionalInfo={additionalInfo}
                size={size}
                colSizes={{all: 12, md: 12}}
            />
        </div>
    );
};

export default MediaContent;
