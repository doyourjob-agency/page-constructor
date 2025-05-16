import yfm from '@diplodoc/transform';
import argsServicesContext from './args/argsServicesContext.json';
import argsFormListContext from './args/argsFormListContext.json';
import argsSolutionsContext from './args/argsSolutionsContext.json';
import argsRouterContext from './args/argsRouterContext.json';
import argsEventsHeaderFiltersContext from './args/argsEventsHeaderFiltersContext.json';
import argsEventsHeaderFilterContext from './args/argsEventsHeaderFilterContext.json';
import argsEventsUpcomingContext from './args/argsEventsUpcomingContext.json';
import argsEventsRecentContext from './args/argsEventsRecentContext.json';
import argsPressReleasesContext from './args/argsPressReleasesContext.json';
import argsHeaderContext from './args/argsHeaderContext.json';

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
        eventsHeaderFiltersContext: {
            name: 'EventsHeaderFiltersContext',
            control: 'object',
            table: {
                category: 'Context',
            },
        },
        eventsHeaderFilterContext: {
            name: 'EventsHeaderFilterContext',
            control: 'object',
            table: {
                category: 'Context',
            },
        },
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
        eventsHeaderFiltersContext: argsEventsHeaderFiltersContext,
        eventsHeaderFilterContext: argsEventsHeaderFilterContext,
        eventsUpcomingContext: argsEventsUpcomingContext,
        eventsRecentContext: argsEventsRecentContext,
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
