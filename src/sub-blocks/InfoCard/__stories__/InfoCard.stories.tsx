import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {yfmTransform} from '../../../../.storybook/utils';
import {ClassNameProps, ContentBlockProps, ContentTheme, InfoCardProps} from '../../../models';
import InfoCard from '../InfoCard';

import data from './data.json';

export default {
    component: InfoCard,
    title: 'Components/Cards/InfoCard',
} as Meta;

const DefaultTemplate: StoryFn<InfoCardProps & ClassNameProps> = (args) => <InfoCard {...args} />;

const ThemeTemplate: StoryFn<InfoCardProps & ClassNameProps> = (args) => (
    <div>
        <div
            style={{
                paddingBottom: '64px',
                paddingTop: '64px',
                backgroundColor: '#ccf0d2',
                marginBottom: '64px',
            }}
        >
            <InfoCard
                {...args}
                image={data.theme.light.image}
                title={data.theme.light.title}
                theme={data.theme.light.theme as ContentTheme}
            />
        </div>
        <div style={{paddingBottom: '64px', paddingTop: '64px', backgroundColor: '#262626'}}>
            <InfoCard
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
} as ContentBlockProps;

Theme.args = {
    ...defaultArgs,
} as ContentBlockProps;
