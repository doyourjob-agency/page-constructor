export declare const InfoBlock: {
    'info-block': {
        additionalProperties: boolean;
        required: string[];
        properties: {
            title: {
                type: string;
                contentType: string;
            };
            backgroundColor: {
                oneOf: (({
                    type: string;
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
            sectionsTitle: {
                type: string;
                contentType: string;
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
            leftContent: {
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
            rightContent: {
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
            type: {};
            when: {
                type: string;
            };
        };
    };
};
