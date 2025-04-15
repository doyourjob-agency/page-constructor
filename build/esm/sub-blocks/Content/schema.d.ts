export declare const ContentItem: {
    additionalProperties: boolean;
    required: string[];
    properties: {
        title: {
            type: string;
            contentType: string;
        };
        text: {
            type: string;
            contentType: string;
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
export declare const ContentBase: {
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
export declare const ContentBlock: {
    content: {
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
};
