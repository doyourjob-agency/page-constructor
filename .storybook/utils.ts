import yfm from '@diplodoc/transform';
import argsServicesContext from './args/argsServicesContext.json';
import argsFormListContext from './args/argsFormListContext.json';

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
