import React from 'react';

import {SelectOption} from '@gravity-ui/uikit';

import {block} from '../../../../utils';

import './EventsFeedHeaderSelectOption.scss';

const b = block('events-feed-header-select-option');

type EventsFeedHeaderSelectOptionProps = {
    data: SelectOption;
};

export const EventsFeedHeaderSelectOption = ({data}: EventsFeedHeaderSelectOptionProps) => {
    return (
        <div className={b()}>
            <span>{data.content}</span>
        </div>
    );
};

export default EventsFeedHeaderSelectOption;
