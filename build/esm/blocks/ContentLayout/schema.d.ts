export declare const ContentLayoutBlock: {
    'content-layout-block': {
        additionalProperties: boolean;
        properties: {
            size: {
                type: string;
                enum: string[];
            };
            background: {
                anyOf: ({
                    optionName: string;
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
                } | {
                    optionName: string;
                    type: string;
                    additionalProperties: boolean;
                    required: string[];
                    properties: {
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
                })[];
            };
            centered: {
                type: string;
            };
            theme: {
                type: string;
                enum: string[];
            };
            textWidth: {
                type: string;
                enum: string[];
            };
            textContent: {
                additionalProperties: boolean;
                properties: {
                    colSizes: {};
                    centered: {
                        type: string;
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
                };
            };
            fileContent: {
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
            /**
             * @deprecated Use params on top level instead
             */
            properties: {
                size: {
                    type: string;
                    enum: string[];
                };
                background: {
                    anyOf: ({
                        optionName: string;
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
                    } | {
                        optionName: string;
                        type: string;
                        additionalProperties: boolean;
                        required: string[];
                        properties: {
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
                    })[];
                };
                centered: {
                    type: string;
                };
                theme: {
                    type: string;
                    enum: string[];
                };
                textWidth: {
                    type: string;
                    enum: string[];
                };
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
