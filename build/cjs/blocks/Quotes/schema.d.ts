export declare const QuotesBlock: {
    'quotes-block': {
        additionalProperties: boolean;
        required: string[];
        properties: {
            theme: {
                type: string;
                enum: string[];
            };
            background: {
                type: string;
            };
            backgroundColor: {
                type: string;
            };
            items: {
                type: string;
                items: {
                    type: string;
                    additionalProperties: boolean;
                    required: string[];
                    properties: {
                        avatar: {
                            type: string;
                        };
                        logo: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        description: {
                            type: string;
                        };
                        quote: {
                            type: string;
                        };
                        style: {
                            type: string;
                            enum: string[];
                        };
                        buttonText: {
                            type: string;
                        };
                        buttonUrl: {
                            type: string;
                        };
                    };
                };
            };
            type: {};
            when: {
                type: string;
            };
        };
    };
};
