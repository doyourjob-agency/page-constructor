import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {yfmTransform} from '../../../../.storybook/utils';
import CardLayout from '../../../blocks/CardLayout/CardLayout';
import {BlockBase} from '../../../components';
import {ConstructorRow} from '../../../containers/PageConstructor/components/ConstructorRow';
import {Grid} from '../../../grid';
import {LayoutItemProps} from '../../../models';
import LayoutItem from '../LayoutItem';

import data from './data.json';

export default {
    title: 'Components/Cards/LayoutItem',
    component: LayoutItem,
} as Meta;

const DefaultTemplate: StoryFn<LayoutItemProps> = (args) => (
    <CardLayout animated={false} colSizes={{all: 12, md: 4}}>
        <LayoutItem {...args} />
        <LayoutItem {...args} />
        <LayoutItem {...args} />
    </CardLayout>
);

const WithIconTemplate: StoryFn<LayoutItemProps> = (args) => (
    <div>
        <div style={{marginBottom: '100px'}}>
            <h1>Icon: Top</h1>
            <DefaultTemplate {...args} />
        </div>
        <div>
            <h1>Icon: Left</h1>
            <DefaultTemplate {...args} icon={data.withIcon.iconLeft as LayoutItemProps['icon']} />
        </div>
    </div>
);

const ControlPositionTemplate: StoryFn<LayoutItemProps> = (args) => (
    <Grid>
        <ConstructorRow>
            <BlockBase>
                <CardLayout title={data.cardLayout.contentTitle} animated={false}>
                    {data.cardLayout.items.map((item, index) => (
                        <LayoutItem
                            key={index}
                            {...(item as Partial<LayoutItemProps>)}
                            {...args}
                            controlPosition="content"
                        />
                    ))}
                </CardLayout>
            </BlockBase>
            <BlockBase>
                <CardLayout title={data.cardLayout.footerTitle} animated={false}>
                    {data.cardLayout.items.map((item, index) => (
                        <LayoutItem
                            key={index}
                            {...(item as Partial<LayoutItemProps>)}
                            {...args}
                            controlPosition="footer"
                        />
                    ))}
                </CardLayout>
            </BlockBase>
        </ConstructorRow>
    </Grid>
);

export const Default = DefaultTemplate.bind({});
export const WithMediaLink = DefaultTemplate.bind({});
export const WithLabel = DefaultTemplate.bind({});
export const WithContentList = DefaultTemplate.bind({});
export const Fullscreen = DefaultTemplate.bind({});
export const MetaInfo = DefaultTemplate.bind({});
export const Youtube = DefaultTemplate.bind({});
export const WithIcon = WithIconTemplate.bind({});
export const ControlPosition = ControlPositionTemplate.bind({});
export const WithBackgroundImage = DefaultTemplate.bind({});
export const BackgroundColor = DefaultTemplate.bind({});

const DefaultArgs = {
    ...data.default.content,
    content: {
        ...data.default.content.content,
        text: yfmTransform(data.default.content.content.text),
    },
};

Default.args = DefaultArgs as LayoutItemProps;

WithMediaLink.args = {
    ...DefaultArgs,
    ...data.withMediaLink.content,
} as LayoutItemProps;

WithLabel.args = {
    ...DefaultArgs,
    ...data.withLabel.content,
} as LayoutItemProps;

WithContentList.args = {
    ...DefaultArgs,
    content: {
        ...DefaultArgs.content,
        list: data.withList.content.list.map((listItem) => ({
            ...listItem,
            text: yfmTransform(listItem.text || ''),
        })),
    },
} as LayoutItemProps;
Fullscreen.args = {...DefaultArgs, ...data.fullscreen.content} as LayoutItemProps;
MetaInfo.args = {
    ...DefaultArgs,
    ...data.metaInfo.content,
    metaInfo: data.metaInfo.content.metaInfo.map((item) => yfmTransform(item)),
} as LayoutItemProps;
Youtube.args = {...DefaultArgs, ...data.youtube.content} as LayoutItemProps;
WithIcon.args = {
    ...DefaultArgs,
    media: undefined,
    icon: data.withIcon.iconTop,
} as LayoutItemProps;

ControlPosition.argTypes = {
    content: {table: {disable: true}},
    media: {table: {disable: true}},
    metaInfo: {table: {disable: true}},
    icon: {table: {disable: true}},
    className: {table: {disable: true}},
    controlPosition: {table: {disable: true}},
    analyticsEvents: {table: {disable: true}},
};

WithBackgroundImage.args = {
    ...DefaultArgs,
    ...data.withBackgroundImage.content,
} as LayoutItemProps;

BackgroundColor.args = {
    ...DefaultArgs,
    ...data.backgroundColor.content,
} as LayoutItemProps;
