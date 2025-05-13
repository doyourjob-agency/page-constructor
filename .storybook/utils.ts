import yfm from '@diplodoc/transform';
import argsServicesContext from './args/argsServicesContext.json';
import argsFormListContext from './args/argsFormListContext.json';
import argsSolutionsContext from './args/argsSolutionsContext.json';
import argsRouterContext from './args/argsRouterContext.json';
import argsEventsContext from './args/argsEventsContext.json';
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
        eventsContext: {
            name: 'EventsContext',
            control: 'object',
            table: {
                category: 'Context',
            },
        },
    },
    args: {
        eventsContext: argsEventsContext,
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
