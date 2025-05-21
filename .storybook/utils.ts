import yfm from '@diplodoc/transform';
import argsServicesContext from './args/argsServicesContext.json';
import argsFormListContext from './args/argsFormListContext.json';
import argsSolutionsContext from './args/argsSolutionsContext.json';
import argsRouterContext from './args/argsRouterContext.json';
import argsFeedHeaderFiltersContext from './args/argsFeedHeaderFiltersContext.json';
import argsFeedHeaderFilterContext from './args/argsFeedHeaderFilterContext.json';
import argsEventsUpcomingContext from './args/argsEventsUpcomingContext.json';
import argsEventsRecentContext from './args/argsEventsRecentContext.json';
import argsPressReleasesContext from './args/argsPressReleasesContext.json';
import argsHeaderContext from './args/argsHeaderContext.json';
import argsBlogPostsContext from './args/argsBlogPostsContext.json';

export const yfmTransform = (content: string) => yfm(content).result.html;

export const argServicesContext = {
    argTypes: {
        servicesContext: {
            name: 'ServicesContext',
            control: 'object',
            table: {
                category: 'Context',
            },
        },
    },
    args: {
        servicesContext: argsServicesContext,
    },
};

export const argFormListContext = {
    argTypes: {
        formListContext: {
            name: 'FormListContext',
            control: 'object',
            table: {
                category: 'Context',
            },
        },
    },
    args: {
        formListContext: argsFormListContext,
    },
};

export const argSolutionsContext = {
    argTypes: {
        solutionsContext: {
            name: 'SolutionsContext',
            control: 'object',
            table: {
                category: 'Context',
            },
        },
    },
    args: {
        solutionsContext: argsSolutionsContext,
    },
};

export const argRouterContext = {
    argTypes: {
        routerContext: {
            name: 'RouterContext',
            control: 'object',
            table: {
                category: 'Context',
            },
        },
    },
    args: {
        routerContext: argsRouterContext,
    },
};

export const argEventsContext = {
    argTypes: {
        eventsUpcomingContext: {
            name: 'EventsUpcomingContext',
            control: 'object',
            table: {
                category: 'Context',
            },
        },
        eventsRecentContext: {
            name: 'EventsRecentContext',
            control: 'object',
            table: {
                category: 'Context',
            },
        },
    },
    args: {
        eventsUpcomingContext: argsEventsUpcomingContext,
        eventsRecentContext: argsEventsRecentContext,
    },
};

export const argBlogPostsContext = {
    argTypes: {
        blogPostsContext: {
            name: 'BlogPostsContext',
            control: 'object',
            table: {
                category: 'Context',
            },
        },
    },
    args: {
        blogPostsContext: argsBlogPostsContext,
    },
};

export const argFeedHeaderContext = {
    argTypes: {
        feedHeaderFiltersContext: {
            name: 'FeedHeaderFiltersContext',
            control: 'object',
            table: {
                category: 'Context',
            },
        },
        feedHeaderFilterContext: {
            name: 'FeedHeaderFilterContext',
            control: 'object',
            table: {
                category: 'Context',
            },
        },
    },
    args: {
        feedHeaderFiltersContext: argsFeedHeaderFiltersContext,
        feedHeaderFilterContext: argsFeedHeaderFilterContext,
    },
};

export const argPressReleasesContext = {
    argTypes: {
        pressReleasesContext: {
            name: 'Press Releases Context',
            control: 'object',
            table: {
                category: 'Context',
            },
        },
    },
    args: {
        pressReleasesContext: argsPressReleasesContext,
    },
};

export const argHeaderContext = {
    argTypes: {
        headerContext: {
            name: 'HeaderContext',
            control: 'object',
            table: {
                category: 'Context',
            },
        },
    },
    args: {
        headerContext: argsHeaderContext,
    },
};
