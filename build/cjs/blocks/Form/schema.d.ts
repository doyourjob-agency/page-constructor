export declare const FormBlock: {
    'form-block': {
        additionalProperties: boolean;
        required: never[];
        properties: {
            title: {
                type: string;
            };
            slug: {
                type: string;
            };
            formData: {
                oneOf: ({
                    type: string;
                    optionName: string;
                    properties: {
                        yandex: {
                            oneOf: (({
                                type: string;
                                required: string[];
                                properties: {
                                    id: {
                                        type: string;
                                    };
                                    containerId: {
                                        type: string;
                                    };
                                    type: {};
                                    when: {
                                        type: string;
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
                        hubspot?: undefined;
                    };
                } | {
                    type: string;
                    optionName: string;
                    properties: {
                        hubspot: {
                            oneOf: (({
                                type: string;
                                required: string[];
                                properties: {
                                    region: {
                                        type: string;
                                    };
                                    portalId: {
                                        type: string;
                                    };
                                    formId: {
                                        type: string;
                                    };
                                    formInstanceId: {
                                        type: string;
                                    };
                                    type: {};
                                    when: {
                                        type: string;
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
                        yandex?: undefined;
                    };
                })[];
            };
            textContent: {
                additionalProperties: boolean;
                properties: Partial<{
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
                    subtitle: {
                        type: string;
                    };
                    text: {
                        type: string;
                        contentType: string;
                        inputType: string;
                    };
                    additionalInfo: {
                        type: string;
                        contentType: string;
                    };
                    size: {
                        type: string;
                        enum: string[];
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
                    theme: {
                        type: string;
                        enum: string[];
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
                    controlPosition: {
                        type: string;
                        enum: string[];
                    };
                }>;
            };
            textFormContent: {
                additionalProperties: boolean;
                properties: Partial<{
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
                    subtitle: {
                        type: string;
                    };
                    text: {
                        type: string;
                        contentType: string;
                        inputType: string;
                    };
                    additionalInfo: {
                        type: string;
                        contentType: string;
                    };
                    size: {
                        type: string;
                        enum: string[];
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
                    theme: {
                        type: string;
                        enum: string[];
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
                    controlPosition: {
                        type: string;
                        enum: string[];
                    };
                }>;
            };
            direction: {
                enum: string[];
            };
            image: {
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
            backgroundColor: {
                type: string;
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
