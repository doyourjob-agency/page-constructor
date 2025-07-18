import React, {Fragment} from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {argHeaderContext, argHeaderStockContext, yfmTransform} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {ButtonProps, HeaderBlockModel, HeaderBlockProps, HeaderStockType} from '../../../models';
import Header from '../Header';

import data from './data.json';

type HeaderBlockPropsNoTitle = Omit<HeaderBlockProps, 'title'>;

const getSizeTitle = (size: string) => data.size.title.replace('{{size}}', size);
const getImageTitle = (text: string) => data.image.title.replace('{{text}}', text);
const getVerticalOffsetTitle = (offset: string) =>
    data.verticalOffset.title.replace('{{offset}}', offset);
const getBreadcrumbsTitle = (theme: string) => data.breadcrumbs.title.replace('{{theme}}', theme);

export default {
    title: 'Blocks/Header',
    component: Header,
    args: {
        ...argHeaderContext.args,
        ...argHeaderStockContext.args,
        image: undefined,
        video: undefined,
        background: undefined,
        breadcrumbs: undefined,
        offset: 'default',
        theme: 'light',
        verticalOffset: 'm',
    },
    argTypes: {
        ...argHeaderContext.argTypes,
        ...argHeaderStockContext.argTypes,
        overtitle: {control: 'text'},
    },
} as Meta;

const DefaultArgs = {
    ...data.default.content,
    description: yfmTransform(data.default.content.description),
};

const DefaultTemplate: StoryFn<HeaderBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

const SizeTemplate: StoryFn<HeaderBlockModel> = (args) => (
    <Fragment>
        <DefaultTemplate {...args} title={getSizeTitle('"L"')} width="l" />
        <DefaultTemplate {...args} title={getSizeTitle('"M"')} width="m" />
        <DefaultTemplate {...args} title={getSizeTitle('"S"')} width="s" />
    </Fragment>
);

const ImageTemplate: StoryFn<HeaderBlockModel> = (args) => (
    <Fragment>
        <DefaultTemplate {...args} title={getImageTitle('«M»')} width="m" />
        <DefaultTemplate {...args} title={getImageTitle('«S»')} width="s" />
    </Fragment>
);

const FitTemplate: StoryFn<HeaderBlockModel> = (args) => (
    <Fragment>
        <DefaultTemplate {...args} title={getImageTitle('«M»')} width="m" />
        <DefaultTemplate
            {...args}
            {...data.imageFit.content}
            title={getImageTitle('«S»')}
            width="s"
        />
        <DefaultTemplate {...args} {...data.video.content} title={getImageTitle('«S»')} width="s" />
        <DefaultTemplate
            {...args}
            {...data.videoFit.content}
            title={getImageTitle('«S»')}
            width="s"
            description={yfmTransform(data.videoFit.description)}
        />
    </Fragment>
);

const VerticalOffsetTemplate: StoryFn<HeaderBlockModel> = (args) => (
    <Fragment>
        <DefaultTemplate {...args} title={getVerticalOffsetTitle('«0»')} verticalOffset="0" />
        <DefaultTemplate {...args} title={getVerticalOffsetTitle('«S»')} verticalOffset="s" />
        <DefaultTemplate {...args} title={getVerticalOffsetTitle('«M»')} verticalOffset="m" />
        <DefaultTemplate {...args} title={getVerticalOffsetTitle('«L»')} verticalOffset="l" />
        <DefaultTemplate {...args} title={getVerticalOffsetTitle('«XL»')} verticalOffset="xl" />
    </Fragment>
);

const BackgroundTemplate: StoryFn<HeaderBlockModel> = (args) => (
    <Fragment>
        <DefaultTemplate
            {...args}
            title={data.media.content.image.title}
            background={data.media.content.image.background}
        />
        <DefaultTemplate
            {...args}
            title={data.media.content.video.title}
            background={data.media.content.video.background}
        />
    </Fragment>
);

const FullWithBackgroundTemplate: StoryFn<HeaderBlockModel> = (args) => (
    <Fragment>
        <DefaultTemplate
            {...args}
            title={data.media.content.image.title}
            background={{
                light: {
                    ...data.media.content.image.background.light,
                    fullWidth: true,
                },
                dark: {
                    ...data.media.content.image.background.dark,
                    fullWidth: true,
                },
            }}
        />
        <DefaultTemplate
            {...args}
            title={data.media.content.video.title}
            background={{
                light: {
                    ...data.media.content.video.background.light,
                    fullWidth: true,
                },
                dark: {
                    ...data.media.content.video.background.dark,
                    fullWidth: true,
                },
            }}
        />
    </Fragment>
);

const FullWidthMediaBackgroundTemplate: StoryFn<HeaderBlockModel> = (args) => (
    <Fragment>
        <DefaultTemplate
            {...args}
            title={data.media.content.image.title}
            background={{
                light: {
                    ...data.media.content.image.background.light,
                    fullWidth: true,
                    fullWidthMedia: true,
                },
                dark: {
                    ...data.media.content.image.background.dark,
                    fullWidth: true,
                    fullWidthMedia: true,
                },
            }}
        />
        <DefaultTemplate
            {...args}
            title={data.media.content.video.title}
            background={{
                light: {
                    ...data.media.content.video.background.light,
                    fullWidth: true,
                    fullWidthMedia: true,
                },
                dark: {
                    ...data.media.content.video.background.dark,
                    fullWidth: true,
                    fullWidthMedia: true,
                },
            }}
        />
    </Fragment>
);

const BreadCrumbsTemplate: StoryFn<HeaderBlockModel> = (args) => (
    <Fragment>
        <DefaultTemplate {...args} title={getBreadcrumbsTitle('light')} />
        <DefaultTemplate
            {...args}
            title={getBreadcrumbsTitle('dark')}
            theme={data.themeDark.content.theme as 'dark'}
            background={data.themeDark.content.background}
            buttons={
                data.themeDark.content.buttons as Pick<
                    ButtonProps,
                    'url' | 'text' | 'theme' | 'primary' | 'size'
                >[]
            }
        />
    </Fragment>
);

const StockTemplate: StoryFn<HeaderBlockModel> = (args) => (
    <Fragment>
        <DefaultTemplate {...args} stock={HeaderStockType.Price} />
        <DefaultTemplate {...args} stock={HeaderStockType.Shares} />
    </Fragment>
);

export const Default = DefaultTemplate.bind({});
export const SwitchingTitle = DefaultTemplate.bind({});
export const Size = SizeTemplate.bind({});
export const Image = ImageTemplate.bind({});
export const VerticalOffset = VerticalOffsetTemplate.bind({});
export const Background = BackgroundTemplate.bind({});
export const FullWithBackground = FullWithBackgroundTemplate.bind({});
export const FullWidthMediaBackground = FullWidthMediaBackgroundTemplate.bind({});
export const DarkTheme = DefaultTemplate.bind({});
export const Breadcrumbs = BreadCrumbsTemplate.bind({});
export const MediaViewFit = FitTemplate.bind({});
export const WithStock = StockTemplate.bind({});

Default.args = {...DefaultArgs} as HeaderBlockProps;

SwitchingTitle.args = {...DefaultArgs, ...data.switchingTitle.content} as HeaderBlockProps;

Size.args = {...DefaultArgs} as HeaderBlockPropsNoTitle;

Image.args = {
    ...DefaultArgs,
    ...data.image.content,
} as HeaderBlockPropsNoTitle;

VerticalOffset.args = {
    ...DefaultArgs,
    ...data.image.content,
} as HeaderBlockPropsNoTitle;

Background.args = {
    ...DefaultArgs,
} as HeaderBlockPropsNoTitle;

FullWithBackground.args = {
    ...DefaultArgs,
} as HeaderBlockPropsNoTitle;

FullWidthMediaBackground.args = {
    ...DefaultArgs,
} as HeaderBlockPropsNoTitle;

DarkTheme.args = {
    ...DefaultArgs,
    ...data.themeDark.content,
} as HeaderBlockProps;

Breadcrumbs.args = {
    ...DefaultArgs,
    ...data.breadcrumbs.content,
} as HeaderBlockProps;

MediaViewFit.args = {
    ...DefaultArgs,
    ...data.image.content,
    mediaView: 'fit',
} as HeaderBlockProps;

WithStock.args = {
    ...data.stock.content,
} as HeaderBlockProps;
