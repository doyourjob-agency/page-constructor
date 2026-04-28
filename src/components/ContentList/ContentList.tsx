import React from 'react';

import {ContentListProps, ContentSize} from '../../models';
import {QAProps} from '../../models/common';
import {block} from '../../utils';
import {getQaAttrubutes} from '../../utils/blocks';
import YFMWrapper from '../YFMWrapper/YFMWrapper';

import ItemIcon from './ContentListItemIcon';

import './ContentList.scss';

const b = block('content-list');

function getHeadingLevel(size: ContentSize) {
    switch (size) {
        case 's':
            return 'h4';
        case 'l':
        default:
            return 'h3';
    }
}

const ContentList = ({list, size = 'l', qa, theme}: ContentListProps & QAProps) => {
    const qaAttributes = getQaAttrubutes(qa, ['image', 'title', 'text']);

    return (
        <div className={b({size, theme})} data-qa={qa}>
            {list?.map((item, index) => {
                const {icon, title, text} = item;
                return (
                    <div className={b('item', {'without-title': !title})} key={index}>
                        <ItemIcon icon={icon} className={b('icon')} qa={qaAttributes.image} />
                        <div>
                            {title &&
                                React.createElement(
                                    getHeadingLevel(size),
                                    {className: b('title'), 'data-qa': qaAttributes.title},
                                    <YFMWrapper content={title} modifiers={{constructor: true}} />,
                                )}
                            {text && (
                                <YFMWrapper
                                    className={b('text')}
                                    content={text}
                                    modifiers={{constructor: true}}
                                    qa={qaAttributes.text}
                                />
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ContentList;
