import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import CardLayout from '../../../blocks/CardLayout/CardLayout';
import {AttachmentCardProps} from '../../../models';
import AttachmentCard from '../AttachmentCard';

import data from './data.json';

const getCardWithBorderTitle = (border: string) =>
    data.withBorder.title.replace('{{border}}', border);

export default {
    component: AttachmentCard,
    title: 'Components/Cards/AttachmentCard',
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

const CardLayoutTemplate: StoryFn<AttachmentCardProps> = (args) => (
    <CardLayout colSizes={{all: 12, md: 4, lg: 3}}>
        <AttachmentCard {...args} />
        <AttachmentCard {...args} />
        <AttachmentCard {...args} />
        <AttachmentCard {...args} />
    </CardLayout>
);

export const Default = DefaultTemplate.bind({});
export const WithBorder = WithBorderTemplate.bind({});
export const WithCardLayout = CardLayoutTemplate.bind({});

const DefaultArgs = {
    ...data.default.content,
};

Default.args = DefaultArgs as AttachmentCardProps;
WithBorder.args = DefaultArgs as AttachmentCardProps;
WithCardLayout.args = DefaultArgs as AttachmentCardProps;
