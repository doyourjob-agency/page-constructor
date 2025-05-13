export declare const tabsItem: {
    type: string;
    additionalProperties: boolean;
    required: string[];
    properties: {
        tabName: {
            type: string;
        };
        caption: {
            type: string;
            contentType: string;
        };
        media: {
            oneOf: (({
                type: string;
                properties: {
                    color: {
                        type: string;
                    };
                    image: {
                        oneOf: ({
                            optionName: string;
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
                            type?: undefined;
                            items?: undefined;
                        } | {
                            type: string;
                            items: {
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
                            optionName: string;
                        })[];
                    };
                    disableImageSliderForArrayInput: {
                        type: string;
                    };
                    video: {
                        type: string;
                        additionalProperties: boolean;
                        required: string[];
                        properties: {
                            src: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            loop: {
                                oneOf: ({
                                    optionName: string;
                                    type: string;
                                    additionalProperties: boolean;
                                    required: string[];
                                    properties: {
                                        start: {
                                            type: string;
                                        };
                                        end: {
                                            type: string;
                                        };
                                    };
                                } | {
                                    type: string;
                                    optionName: string;
                                })[];
                            };
                            type: {
                                type: string;
                                enum: string[];
                            };
                            muted: {
                                type: string;
                            };
                            autoplay: {
                                type: string;
                            };
                            elapsedTime: {
                                type: string;
                            };
                            playButton: {
                                type: string;
                                additionalProperties: boolean;
                                properties: {
                                    type: {
                                        type: string;
                                        enum: string[];
                                    };
                                    theme: {
                                        type: string;
                                        enum: string[];
                                    };
                                    text: {
                                        type: string;
                                        contentType: string;
                                    };
                                };
                            };
                            controls: {
                                type: string;
                                enum: import("../..").MediaVideoControlsType[];
                            };
                            customControlsOptions: {
                                type: string;
                                additionalProperties: boolean;
                                properties: {
                                    type: {
                                        type: string;
                                        enum: import("../..").CustomControlsType[];
                                    };
                                    muteButtonShown: {
                                        type: string;
                                    };
                                    positioning: {
                                        type: string;
                                        enum: import("../..").CustomControlsButtonPositioning[];
                                    };
                                };
                            };
                            ariaLabel: {
                                type: string;
                            };
                            contain: {
                                type: string;
                            };
                        };
                    };
                    youtube: {
                        type: string;
                    };
                    videoIframe: {
                        type: string;
                    };
                    parallax: {
                        type: string;
                    };
                    height: {
                        type: string;
                    };
                    previewImg: {
                        type: string;
                    };
                    dataLens: {
                        oneOf: ({
                            type: string;
                            optionName: string;
                        } | {
                            optionName: string;
                            type: string;
                            additionalProperties: boolean;
                            required: string[];
                            properties: {
                                id: {
                                    type: string;
                                };
                                theme: {
                                    type: string;
                                    enum: string[];
                                };
                            };
                        })[];
                    };
                    fullscreen: {
                        type: string;
                    };
                    analyticsEvents: {
                        anyOf: ({
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
                        })[];
                    };
                    ratio: {
                        type: string[];
                        pattern: string;
                    };
                    iframe: {
                        type: string;
                        additionalProperties: boolean;
                        required: string[];
                        properties: {
                            src: {
                                type: string;
                            };
                            name: {
                                type: string;
                            };
                            title: {
                                type: string;
                            };
                            height: {
                                type: string;
                            };
                            width: {
                                type: string;
                            };
                        };
                    };
                    margins: {
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
        image: {
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
        border: {
            type: string;
            enum: string[];
        };
        title?: {
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
        } | undefined;
        subtitle?: {
            type: string;
        } | undefined;
        text?: {
            type: string;
            contentType: string;
            inputType: string;
        } | undefined;
        additionalInfo?: {
            type: string;
            contentType: string;
        } | undefined;
        size?: {
            type: string;
            enum: string[];
        } | undefined;
        links?: {
            type: string;
            items: {
                type: string;
                properties: {
                    when: {
                        type: string;
                    };
                };
            };
        } | undefined;
        subtitleLinks?: {
            type: string;
            items: {
                type: string;
                properties: {
                    when: {
                        type: string;
                    };
                };
            };
        } | undefined;
        buttons?: {
            type: string;
            items: {
                type: string;
                properties: {
                    when: {
                        type: string;
                    };
                };
            };
        } | undefined;
        theme?: {
            type: string;
            enum: string[];
        } | undefined;
        list?: {
            type: string;
            items: {
                type: string;
                properties: {
                    when: {
                        type: string;
                    };
                };
            };
        } | undefined;
        controlPosition?: {
            type: string;
            enum: string[];
        } | undefined;
    };
};
export declare const TabsBlock: {
    'tabs-block': {
        additionalProperties: boolean;
        required: string[];
        properties: {
            tabsColSizes: {};
            direction: {
                type: string;
                enum: string[];
            };
            centered: {
                type: string;
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
            contentSize: {
                type: string;
                enum: string[];
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
