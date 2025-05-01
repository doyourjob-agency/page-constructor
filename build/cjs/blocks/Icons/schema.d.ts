export declare const IconsProps: {
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
        size: {
            type: string;
            enum: string[];
            default: string;
        };
        colSizes: {
            type: string;
            additionalProperties: boolean;
            properties: {};
        };
        items: {
            type: string;
            items: {
                type: string;
                additionalProperties: boolean;
                required: string[];
                properties: {
                    url: {
                        type: string;
                    };
                    text: {
                        type: string;
                        contentType: string;
                    };
                    src: {
                        type: string;
                    };
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
            };
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
        visibility: {
            oneOf: ({
                type: string;
                enum: string[];
                additionalProperties?: undefined;
                properties?: undefined;
            } | {
                type: string;
                additionalProperties: boolean;
                properties: {
                    xs: {
                        type: string;
                    };
                    sm: {
                        type: string;
                    };
                    md: {
                        type: string;
                    };
                    lg: {
                        type: string;
                    };
                    xl: {
                        type: string;
                    };
                    xxl: {
                        type: string;
                    };
                };
                enum?: undefined;
            })[];
        };
        visible: {
            type: string;
            enum: string[];
        };
        hidden: {
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
export declare const IconsBlock: {
    'icons-block': {
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
            size: {
                type: string;
                enum: string[];
                default: string;
            };
            colSizes: {
                type: string;
                additionalProperties: boolean;
                properties: {};
            };
            items: {
                type: string;
                items: {
                    type: string;
                    additionalProperties: boolean;
                    required: string[];
                    properties: {
                        url: {
                            type: string;
                        };
                        text: {
                            type: string;
                            contentType: string;
                        };
                        src: {
                            type: string;
                        };
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
                };
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
            visibility: {
                oneOf: ({
                    type: string;
                    enum: string[];
                    additionalProperties?: undefined;
                    properties?: undefined;
                } | {
                    type: string;
                    additionalProperties: boolean;
                    properties: {
                        xs: {
                            type: string;
                        };
                        sm: {
                            type: string;
                        };
                        md: {
                            type: string;
                        };
                        lg: {
                            type: string;
                        };
                        xl: {
                            type: string;
                        };
                        xxl: {
                            type: string;
                        };
                    };
                    enum?: undefined;
                })[];
            };
            visible: {
                type: string;
                enum: string[];
            };
            hidden: {
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
