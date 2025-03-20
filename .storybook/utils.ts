import yfm from '@diplodoc/transform';
import argsServicesContext from './args/argsServicesContext.json';

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
