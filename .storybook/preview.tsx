import '../styles/storybook/index.scss';
import '@gravity-ui/uikit/styles/styles.scss';
import {MobileProvider, Platform, ThemeProvider} from '@gravity-ui/uikit';

import React, {Fragment} from 'react';
import {MINIMAL_VIEWPORTS} from '@storybook/addon-viewport';
import type {Decorator, Preview} from '@storybook/react';
import {themeLight} from './theme/light';
import {PageConstructorProvider} from '../src/containers/PageConstructor/Provider';
import {withMobile} from './decorators/withMobile';
import {withLang} from './decorators/withLang';
import {DocsDecorator} from './decorators/docs';

import {HeaderWidgetContext, HeaderWidgetContextProps, Theme} from '../src';
import {GlobalThemeController} from './theme/utils/global-theme-controller';
import {ServicesContext, ServicesContextProps} from '../src/context/servicesContext';
import {FormListContext, FormListContextProps} from '../src/context/formListContext';
import {SolutionsContext, SolutionsContextProps} from '../src/context/solutionsContext';
import {RouterContext, RouterContextProps} from '../src/context/routerContext';
import {
    EventsRecentContext,
    EventsRecentContextProps,
    EventsUpcomingContext,
    EventsUpcomingContextProps,
} from '../src/context/eventsContext';
import {BlogPostsContext, BlogPostsContextProps} from '../src/context/blogPostsContext';
import {PressReleasesContext, PressReleasesContextProps} from '../src/context/pressReleasesContext';
import {HeaderContext, HeaderContextProps} from '../src/context/headerContext';

import '../styles/styles.scss';
import {
    FeedHeaderFilterContext,
    FeedHeaderFilterContextProps,
    FeedHeaderFiltersContext,
    FeedHeaderFiltersContextProps,
} from '../src/context/feedHeaderContext';
import {RelevantPostsContext, RelevantPostsContextProps} from '../src/context/relevantPostsContext';

const withContextProvider: Decorator = (Story, context) => {
    const theme = context.globals.theme;

    // to set theme in docs
    context.parameters.backgrounds.default = theme;
    context.globals.backgrounds = {
        value: theme === Theme.Light ? 'white' : 'black',
    };
    context.globals.background = theme;

    // TODO: to switch docs theme dynamically in the future
    // context.parameters.docs.theme = theme === 'light' ? CommonTheme.light : CommonTheme.dark;

    /* eslint-disable react/jsx-key */
    const children = [
        <GlobalThemeController />,
        <ThemeProvider theme={theme} />,
        <MobileProvider mobile={false} platform={Platform.BROWSER} />,
        <ServicesContext.Provider value={context.args.servicesContext as ServicesContextProps} />,
        <FormListContext.Provider value={context.args.formListContext as FormListContextProps} />,
        <SolutionsContext.Provider
            value={context.args.solutionsContext as SolutionsContextProps}
        />,
        <RouterContext.Provider value={context.args.routerContext as RouterContextProps} />,
        <FeedHeaderFiltersContext.Provider
            value={context.args.feedHeaderFiltersContext as FeedHeaderFiltersContextProps}
        />,
        <FeedHeaderFilterContext.Provider
            value={context.args.feedHeaderFilterContext as FeedHeaderFilterContextProps}
        />,
        <EventsUpcomingContext.Provider
            value={context.args.eventsUpcomingContext as EventsUpcomingContextProps}
        />,
        <EventsRecentContext.Provider
            value={context.args.eventsRecentContext as EventsRecentContextProps}
        />,
        <PressReleasesContext.Provider
            value={context.args.pressReleasesContext as PressReleasesContextProps}
        />,
        <BlogPostsContext.Provider
            value={context.args.blogPostsContext as BlogPostsContextProps}
        />,
        <HeaderContext.Provider value={context.args.headerContext as HeaderContextProps} />,
        <HeaderWidgetContext.Provider
            value={context.args.headerWidgetContext as HeaderWidgetContextProps}
        />,
        <RelevantPostsContext.Provider
            value={context.args.relevantPostsContext as RelevantPostsContextProps}
        />,
    ].reduceRight(
        (prev, provider) => React.cloneElement(provider, {}, prev),
        <Story {...context} />,
    );
    /* eslint-enable react/jsx-key */

    return <Fragment>{children}</Fragment>;
};

const withPageConstructorProvider: Decorator = (Story, context) => {
    return (
        <PageConstructorProvider
            isMobile={context.globals.platform === 'mobile'}
            locale={{lang: context.globals.lang}}
            theme={context.globals.theme}
        >
            <Story {...context} />
        </PageConstructorProvider>
    );
};

const preview: Preview = {
    decorators: [withLang, withMobile, withContextProvider, withPageConstructorProvider],
    parameters: {
        layout: 'fullscreen',
        docs: {
            theme: themeLight,
            container: DocsDecorator,
        },
        // FIXME: Disabled due to performance reasons. See https://github.com/storybookjs/storybook/issues/5551
        // actions: {
        //     argTypesRegex: '^on.*',
        // },
        jsx: {showFunctions: true}, // to show function in sources
        viewport: {
            viewports: MINIMAL_VIEWPORTS,
        },
        backgrounds: {
            default: 'light',
            values: [
                {name: 'light', value: 'white'},
                {name: 'dark', value: 'rgba(45, 44, 51, 1)'},
            ],
        },
        options: {
            storySort: {
                order: [
                    'Changelog',
                    'Documentation',
                    'Blocks',
                    'Components',
                    ['Cards', 'Links and buttons', 'Pics, video, DataLens'],
                ],
                method: 'alphabetical',
            },
        },
    },
    globalTypes: {
        theme: {
            name: 'Theme',
            description: 'Global theme for components',
            defaultValue: 'light',
            toolbar: {
                items: [
                    {value: 'light', icon: 'circle', title: 'Light'},
                    {value: 'dark', icon: 'circlehollow', title: 'Dark'},
                ],
            },
        },
        lang: {
            name: 'Language',
            defaultValue: 'en',
            toolbar: {
                icon: 'globe',
                items: [
                    {value: 'ru', right: '🇷🇺', title: 'Ru'},
                    {value: 'en', right: '🇺🇸', title: 'En'},
                ],
            },
        },
        platform: {
            name: 'Platform',
            defaultValue: 'desktop',
            toolbar: {
                items: [
                    {value: 'desktop', title: 'Desktop', icon: 'browser'},
                    {value: 'mobile', title: 'Mobile', icon: 'mobile'},
                ],
            },
        },
    },
};

export default preview;
