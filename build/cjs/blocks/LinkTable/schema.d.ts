export declare const LinkTableBlock: {
    'link-table-block': {
        additionalProperties: boolean;
        required: string[];
        properties: {
            title: {
                type: string;
                additionalProperties: boolean;
                required: string[];
                properties: {
                    text: {
                        type: string;
                        contentType: string;
                    };
                    textSize: {
                        type: string;
                        enum: string[];
                    };
                    url: {
                        type: string;
                    };
                    urlTitle: {
                        type: string;
                    };
                    resetMargin: {
                        type: string;
                    };
                };
            };
            items: {
                type: string;
                items: {
                    type: string;
                    items: {
                        type: string;
                        additionalProperties: boolean;
                        required: string[];
                        properties: {
                            text: {
                                type: string;
                                contentType: string;
                            };
                            url: {
                                type: string;
                            };
                            urlTitle: {
                                type: string;
                            };
                            arrow: {
                                type: string;
                            };
                            theme: {
                                type: string;
                                enum: string[];
                            };
                            textSize: {
                                type: string;
                                enum: string[];
                            };
                            target: {
                                type: string;
                                enum: string[];
                            };
                            analyticsEvents: {
                                oneOf: ({
                                    optionName: string;
                                    type: string;
                                    additionalProperties: {
                                        type: string;
                                    };
                                    required: string[];
                                    properties: {
                                        name: {
                                            type: string;
                                        };
                                        type: {
                                            type: string;
                                        };
                                        counters: {
                                            type: string;
                                            additionalProperties: boolean;
                                            required: never[];
                                            properties: {
                                                include: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                    };
                                                };
                                                exclude: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                    };
                                                };
                                            };
                                        };
                                        context: {
                                            type: string;
                                        };
                                    };
                                    items?: undefined;
                                } | {
                                    type: string;
                                    items: {
                                        type: string;
                                        additionalProperties: {
                                            type: string;
                                        };
                                        required: string[];
                                        properties: {
                                            name: {
                                                type: string;
                                            };
                                            type: {
                                                type: string;
                                            };
                                            counters: {
                                                type: string;
                                                additionalProperties: boolean;
                                                required: never[];
                                                properties: {
                                                    include: {
                                                        type: string;
                                                        items: {
                                                            type: string;
                                                        };
                                                    };
                                                    exclude: {
                                                        type: string;
                                                        items: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                            };
                                            context: {
                                                type: string;
                                            };
                                        };
                                    };
                                    optionName: string;
                                })[];
                            };
                            type: {};
                            when: {
                                type: string;
                            };
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
