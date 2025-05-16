export declare const CardLayoutProps: {
    additionalProperties: boolean;
    required: never[];
    properties: {
        colSizes: {
            type: string;
            additionalProperties: boolean;
            properties: {};
        };
        background: {
            anyOf: ({
                properties: {
                    border: {
                        type: string;
                        enum: string[];
                    };
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
                optionName: string;
                type: string;
                additionalProperties: boolean;
            } | {
                properties: {
                    border: {
                        type: string;
                        enum: string[];
                    };
                    desktop: {
                        type: string;
                        pattern: string;
                    };
                    tablet: {
                        type: string;
                        pattern: string;
                    };
                    mobile: {
                        type: string;
                        pattern: string;
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
                optionName: string;
                type: string;
                additionalProperties: boolean;
                required: string[];
            })[];
        };
        children: {
            type: string;
            items: {
                $ref: string;
            };
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
export declare const CardLayoutBlock: {
    'card-layout-block': {
        additionalProperties: boolean;
        required: never[];
        properties: {
            colSizes: {
                type: string;
                additionalProperties: boolean;
                properties: {};
            };
            background: {
                anyOf: ({
                    properties: {
                        border: {
                            type: string;
                            enum: string[];
                        };
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
                    optionName: string;
                    type: string;
                    additionalProperties: boolean;
                } | {
                    properties: {
                        border: {
                            type: string;
                            enum: string[];
                        };
                        desktop: {
                            type: string;
                            pattern: string;
                        };
                        tablet: {
                            type: string;
                            pattern: string;
                        };
                        mobile: {
                            type: string;
                            pattern: string;
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
                    optionName: string;
                    type: string;
                    additionalProperties: boolean;
                    required: string[];
                })[];
            };
            children: {
                type: string;
                items: {
                    $ref: string;
                };
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
