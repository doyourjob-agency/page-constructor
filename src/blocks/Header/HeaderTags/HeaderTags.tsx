import React from 'react';

import {Calendar, Clock, MapPin} from '@gravity-ui/icons';
import {Button as ButtonKit, Icon} from '@gravity-ui/uikit';

import {Col, GridColumnClassParams} from '../../../grid';
import {HeaderTag} from '../../../models';
import {block} from '../../../utils';

import './HeaderTags.scss';

const b = block('header-tags');

function getIcon(name?: string) {
    switch (name) {
        case 'calendar':
            return <Icon data={Calendar} size={16} />;
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
    sizes: GridColumnClassParams['sizes'];
}

export const HeaderTags = ({theme, tags, sizes, className}: HeaderTagsProps) => {
    if (!tags?.length) return null;
    return (
        <Col className={b({theme}, className)} sizes={sizes}>
            {tags.map(({url, backgroundColor, textColor, text, target, icon, border = true}) => (
                <ButtonKit
                    view={border ? 'outlined' : 'normal'}
                    size="l"
                    href={url}
                    className={b('tag', {disable: !url, opHover: Boolean(backgroundColor)})}
                    style={
                        {
                            ...(backgroundColor && {
                                '--_--background-color': backgroundColor,
                                '--_--background-color-hover': backgroundColor,
                            }),
                            ...(textColor && {color: textColor}),
                        } as React.CSSProperties
                    }
                    {...(url ? {} : {tabIndex: -1})}
                    key={text}
                    target={target}
                >
                    {getIcon(icon)}
                    {text}
                </ButtonKit>
            ))}
        </Col>
    );
};

export default HeaderTags;
