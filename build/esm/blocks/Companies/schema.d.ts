export declare const CompaniesBlock: {
    'companies-block': {
        additionalProperties: boolean;
        required: string[];
        properties: {
            title: {
                type: string;
                contentType: string;
            };
            description: {
                type: string;
                contentType: string;
            };
            images: {
                oneOf: (({
                    type: string;
                    required: string[];
                    properties: {
                        desktop: {
                            type: string;
                        };
                        tablet: {
                            type: string;
                        };
                        mobile: {
                            type: string;
                        };
                        alt: {
                            type: string;
                            contentType: string;
                        };
                    };
                } & {
                    optionName: string;
                }) | {
                    type: string;
                    additionalProperties: boolean;
                    required: import("../..").Theme[];
                    properties: {};
                    optionName: string;
                })[];
            };
            animated: {
                type: string;
            };
            type: {};
            when: {
                type: string;
            };
        };
    };
};
