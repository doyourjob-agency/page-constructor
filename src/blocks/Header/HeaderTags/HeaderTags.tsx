import React from 'react';

import {Clock, MapPin} from '@gravity-ui/icons';
import {Button as ButtonKit, Icon} from '@gravity-ui/uikit';

import {Col} from '../../../grid';
import {HeaderTag} from '../../../models';
import {block} from '../../../utils';

import './HeaderTags.scss';

const b = block('header-tags');

function getIcon(name?: string) {
    switch (name) {
        case 'clock':
            return <Icon data={Clock} size={16} />;
        case 'map':
            return <Icon data={MapPin} size={16} />;
        default:
            return null;
    }
}

interface HeaderTagsProps {
    theme?: 'light' | 'dark';
    tags?: HeaderTag[];
    className?: string;
}

export const HeaderTags = ({theme, tags, className}: HeaderTagsProps) => {
    if (!tags?.length) return null;
    return (
        <Col className={b({theme}, className)}>
            {tags.map((tag) => (
                <ButtonKit
                    view="outlined"
                    size="l"
                    href={tag.url}
                    className={b('tag', {disable: !tag.url})}
                    {...(tag.url ? {} : {tabIndex: -1})}
                    key={tag.text}
                    target={tag.target}
                >
                    {getIcon(tag.icon)}
                    {tag.text}
                </ButtonKit>
            ))}
        </Col>
    );
};

export default HeaderTags;
