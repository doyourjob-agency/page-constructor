export declare const ExtendedFeaturesItem: {
    additionalProperties: boolean;
    required: never[];
    properties: {
        title: {
            type: string;
            contentType: string;
        };
        text: {
            type: string;
            contentType: string;
        };
        label: {
            type: string;
            enum: string[];
        };
        link: {
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
        icon: {
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
    };
};
export declare const ExtendedFeaturesBlock: {
    'extended-features-block': {
        additionalProperties: boolean;
        required: never[];
        properties: {
            items: {
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
            colSizes: {
                type: string;
                additionalProperties: boolean;
                properties: {};
            };
            title: {
                oneOf: ({
                    type: string;
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
                })[];
            };
            description: {
                type: string;
                contentType: string;
                inputType: string;
            };
            animated: {
                type: string;
            };
            anchor: {
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
                };
            };
            visible: {
                type: string;
                enum: string[];
            };
            resetPaddings: {
                type: string;
            };
            context: {
                type: string;
            };
            indent: {
                type: string;
                additionalProperties: boolean;
                properties: {
                    top: {
                        enum: string[];
                    };
                    bottom: {
                        enum: string[];
                    };
                };
            };
            backgroundFull: {
                type: string;
            };
            type: {};
            when: {
                type: string;
            };
        };
    };
};
