import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {AttachmentCardProps} from '../../../models';
import AttachmentCard from '../AttachmentCard';

import data from './data.json';

const getCardWithBorderTitle = (border: string) =>
    data.withBorder.title.replace('{{border}}', border);

export default {
    component: AttachmentCard,
    title: 'Components/Cards/AttachmentCard',
    args: {
        theme: 'light',
    },
} as Meta;

const DefaultTemplate: StoryFn<AttachmentCardProps> = (args) => (
    <div style={{maxWidth: '400px'}}>
        <AttachmentCard {...args} />
    </div>
);

const WithBorderTemplate: StoryFn<AttachmentCardProps> = (args) => (
    <div style={{display: 'flex'}}>
        <div style={{maxWidth: '400px', padding: '0 8px'}}>
            <AttachmentCard {...args} title={getCardWithBorderTitle('shadow')} />
        </div>
        <div style={{maxWidth: '400px', padding: '0 8px'}}>
            <AttachmentCard {...args} border="line" title={getCardWithBorderTitle('line')} />
        </div>
        <div style={{maxWidth: '400px', padding: '0 8px'}}>
            <AttachmentCard {...args} border="none" title={getCardWithBorderTitle('none')} />
        </div>
    </div>
);

export const Default = DefaultTemplate.bind({});
export const WithBorder = WithBorderTemplate.bind({});

const DefaultArgs = {
    ...data.default.content,
};

Default.args = DefaultArgs as AttachmentCardProps;
WithBorder.args = DefaultArgs as AttachmentCardProps;
