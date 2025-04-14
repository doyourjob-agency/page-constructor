export declare const MediaCardBlock: {
    'media-card': {
        additionalProperties: boolean;
        required: never[];
        properties: {
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
            animated: {
                type: string;
            };
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
