export declare const Quote: {
    quote: {
        additionalProperties: boolean;
        required: string[];
        properties: {
            text: {
                type: string;
                contentType: string;
            };
            yfmText: {
                type: string;
                contentType: string;
            };
            image: {
                oneOf: (({
                    oneOf: ({
                        type: string;
                        properties: {
                            when: {
                                type: string;
                            };
                        };
                    } | {
                        type: string;
                        pattern: string;
                        optionName: string;
                        items?: undefined;
                    } | {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                when: {
                                    type: string;
                                };
                            };
                        };
                        optionName: string;
                        pattern?: undefined;
                    })[];
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
            logo: {
                oneOf: ({
                    type: string;
                    properties: {
                        when: {
                            type: string;
                        };
                    };
                } | {
                    type: string;
                    pattern: string;
                    optionName: string;
                    items?: undefined;
                } | {
                    type: string;
                    items: {
                        type: string;
                        properties: {
                            when: {
                                type: string;
                            };
                        };
                    };
                    optionName: string;
                    pattern?: undefined;
                })[];
            };
            color: {
                type: string;
            };
            url: {
                type: string;
            };
            urlTitle: {
                type: string;
            };
            buttonText: {
                type: string;
            };
            theme: {
                type: string;
                enum: string[];
            };
            author: {
                type: string;
                required: string[];
                properties: {
                    firstName: {
                        type: string;
                        contentType: string;
                    };
                    secondName: {
                        type: string;
                        contentType: string;
                    };
                    avatar: {
                        oneOf: ({
                            type: string;
                            properties: {
                                when: {
                                    type: string;
                                };
                            };
                        } | {
                            type: string;
                            pattern: string;
                            optionName: string;
                            items?: undefined;
                        } | {
                            type: string;
                            items: {
                                type: string;
                                properties: {
                                    when: {
                                        type: string;
                                    };
                                };
                            };
                            optionName: string;
                            pattern?: undefined;
                        })[];
                    };
                    description: {
                        type: string;
                        contentType: string;
                    };
                };
            };
            quoteType: {
                type: string;
                enum: import("../..").QuoteType[];
            };
            type: {};
            when: {
                type: string;
            };
        };
    };
};
