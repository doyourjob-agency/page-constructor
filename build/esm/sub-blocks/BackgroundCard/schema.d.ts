export declare const BackgroundCard: {
    'background-card': {
        additionalProperties: boolean;
        required: string[];
        properties: {
            url: {
                type: string;
            };
            urlTitle: {
                type: string;
            };
            background: {
                oneOf: (({
                    required: string[];
                    type: string;
                    additionalProperties: boolean;
                    properties: {
                        src: {
                            type: string;
                            pattern: string;
                        };
                        style: {
                            type: string;
                            additionalProperties: boolean;
                            required: never[];
                            properties: {
                                backgroundColor: {
                                    type: string;
                                };
                                height: {
                                    type: string[];
                                };
                                width: {
                                    type: string[];
                                };
                                color: {
                                    type: string;
                                };
                            };
                        };
                        alt: {
                            type: string;
                            contentType: string;
                        };
                        disableCompress: {
                            type: string;
                        };
                        loading: {
                            type: string;
                            enum: string[];
                        };
                        fetchPriority: {
                            type: string;
                            enum: string[];
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
            backgroundColor: {
                type: string;
            };
            backgroundPosition: {
                type: string;
                enum: string[];
            };
            paddingBottom: {
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
            controlPosition: {
                type: string;
                enum: string[];
            };
            title: {
                oneOf: ({
                    type: string;
                    contentType: string;
                    optionName: string;
                } | {
                    optionName: string;
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
                    contentType?: undefined;
                })[];
            };
            text: {
                type: string;
                contentType: string;
                inputType: string;
            };
            theme: {
                type: string;
                enum: string[];
            };
            subtitle: {
                type: string;
            };
            additionalInfo: {
                type: string;
                contentType: string;
            };
            links: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        when: {
                            type: string;
                        };
                    };
                };
            };
            subtitleLinks: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        when: {
                            type: string;
                        };
                    };
                };
            };
            buttons: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        when: {
                            type: string;
                        };
                    };
                };
            };
            list: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        when: {
                            type: string;
                        };
                    };
                };
            };
            border: {
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
