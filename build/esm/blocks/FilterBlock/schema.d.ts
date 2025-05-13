export declare const FilterTagProps: {
    additionalProperties: boolean;
    required: string[];
    properties: {
        id: {
            type: string;
        };
        label: {
            type: string;
        };
    };
};
export declare const FilterItemProps: {
    additionalProperties: boolean;
    required: string[];
    properties: {
        tags: {
            type: string;
            items: {
                type: string;
            };
        };
        card: {
            $ref: string;
        };
    };
};
export declare const FilterProps: {
    additionalProperties: boolean;
    required: string[];
    properties: {
        allTag: {
            oneOf: {
                type: string;
                optionName: string;
            }[];
        };
        colSizes: {
            type: string;
            additionalProperties: boolean;
            properties: {};
        };
        tags: {
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
        tagButtonSize: {
            type: string;
            enum: string[];
        };
        centered: {
            type: string;
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
export declare const FilterBlock: {
    'filter-block': {
        additionalProperties: boolean;
        required: string[];
        properties: {
            allTag: {
                oneOf: {
                    type: string;
                    optionName: string;
                }[];
            };
            colSizes: {
                type: string;
                additionalProperties: boolean;
                properties: {};
            };
            tags: {
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
            tagButtonSize: {
                type: string;
                enum: string[];
            };
            centered: {
                type: string;
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
