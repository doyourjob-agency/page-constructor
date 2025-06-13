import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {yfmTransform} from '../../../../.storybook/utils';
import {ClassNameProps, ContentTheme, EventPersonCardProps} from '../../../models';
import EventPersonCard from '../EventPersonCard';

import data from './data.json';

export default {
    component: EventPersonCard,
    title: 'Components/Cards/EventPersonCard',
} as Meta;

const DefaultTemplate: StoryFn<EventPersonCardProps & ClassNameProps> = (args) => (
    <EventPersonCard {...args} />
);

const ThemeTemplate: StoryFn<EventPersonCardProps & ClassNameProps> = (args) => (
    <div>
        <div
            style={{
                paddingBottom: '64px',
                paddingTop: '64px',
                backgroundColor: '#ccf0d2',
                marginBottom: '64px',
            }}
        >
            <EventPersonCard
                {...args}
                image={data.theme.light.image}
                title={data.theme.light.title}
                theme={data.theme.light.theme as ContentTheme}
            />
        </div>
        <div style={{paddingBottom: '64px', paddingTop: '64px', backgroundColor: '#262626'}}>
            <EventPersonCard
                {...args}
                image={data.theme.dark.image}
                title={data.theme.dark.title}
                theme={data.theme.dark.theme as ContentTheme}
            />
        </div>
    </div>
);

export const Default = DefaultTemplate.bind({});
export const Theme = ThemeTemplate.bind({});

const defaultArgs = {
    ...data.default.content,
    text: yfmTransform(data.default.content.text),
};

Default.args = {
    ...defaultArgs,
} as EventPersonCardProps;

Theme.args = {
    ...defaultArgs,
} as EventPersonCardProps;
