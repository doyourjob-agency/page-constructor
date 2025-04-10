export declare const ServicesBlock: {
    'services-block': {
        additionalProperties: boolean;
        required: never[];
        properties: {
            title: {
                type: string;
            };
            serviceLinkType: {
                type: string;
                enum: string[];
            };
            type: {};
            when: {
                type: string;
            };
        };
    };
};
