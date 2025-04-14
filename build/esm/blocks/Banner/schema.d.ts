export declare const BannerCardProps: {
    additionalProperties: boolean;
    required: string[];
    properties: {
        title: {
            type: string;
            contentType: string;
        };
        subtitle: {
            type: string;
            contentType: string;
        };
        image: {
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
        mediaView: {
            type: string;
            enum: string[];
        };
        disableCompress: {
            type: string;
        };
        color: {
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
        theme: {
            type: string;
            enum: string[];
        };
        width: {
            type: string;
            enum: string[];
        };
        button: {
            type: string;
            additionalProperties: boolean;
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
                primary: {
                    type: string;
                };
                size: {
                    type: string;
                    enum: string[];
                };
                theme: {
                    type: string;
                    enum: string[];
                };
                img: {
                    oneOf: ({
                        type: string;
                        optionName: string;
                        additionalProperties?: undefined;
                        required?: undefined;
                        properties?: undefined;
                    } | {
                        type: string;
                        additionalProperties: boolean;
                        required: string[];
                        properties: {
                            data: {
                                type: string;
                            };
                            position: {
                                type: string;
                                enum: string[];
                            };
                            alt: {
                                type: string;
                                contentType: string;
                            };
                        };
                        optionName: string;
                    })[];
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
                target: {
                    type: string;
                    enum: string[];
                };
                width: {
                    type: string;
                    enum: string[];
                };
            };
            if: {
                properties: {
                    theme: {
                        enum: string[];
                    };
                };
            };
            then: {
                required: string[];
            };
            else: {
                required: string[];
            };
        };
        animated: {
            type: string;
        };
        type: {};
        when: {
            type: string;
        };
    };
};
export declare const BannerBlock: {
    'banner-block': {
        additionalProperties: boolean;
        required: string[];
        properties: {
            title: {
                type: string;
                contentType: string;
            };
            subtitle: {
                type: string;
                contentType: string;
            };
            image: {
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
            mediaView: {
                type: string;
                enum: string[];
            };
            disableCompress: {
                type: string;
            };
            color: {
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
            theme: {
                type: string;
                enum: string[];
            };
            width: {
                type: string;
                enum: string[];
            };
            button: {
                type: string;
                additionalProperties: boolean;
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
                    primary: {
                        type: string;
                    };
                    size: {
                        type: string;
                        enum: string[];
                    };
                    theme: {
                        type: string;
                        enum: string[];
                    };
                    img: {
                        oneOf: ({
                            type: string;
                            optionName: string;
                            additionalProperties?: undefined;
                            required?: undefined;
                            properties?: undefined;
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            required: string[];
                            properties: {
                                data: {
                                    type: string;
                                };
                                position: {
                                    type: string;
                                    enum: string[];
                                };
                                alt: {
                                    type: string;
                                    contentType: string;
                                };
                            };
                            optionName: string;
                        })[];
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
                    target: {
                        type: string;
                        enum: string[];
                    };
                    width: {
                        type: string;
                        enum: string[];
                    };
                };
                if: {
                    properties: {
                        theme: {
                            enum: string[];
                        };
                    };
                };
                then: {
                    required: string[];
                };
                else: {
                    required: string[];
                };
            };
            animated: {
                type: string;
            };
            type: {};
            when: {
                type: string;
            };
        };
    };
};
export declare const BannerCard: {
    'banner-card': {
        additionalProperties: boolean;
        required: string[];
        properties: {
            title: {
                type: string;
                contentType: string;
            };
            subtitle: {
                type: string;
                contentType: string;
            };
            image: {
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
            mediaView: {
                type: string;
                enum: string[];
            };
            disableCompress: {
                type: string;
            };
            color: {
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
            theme: {
                type: string;
                enum: string[];
            };
            width: {
                type: string;
                enum: string[];
            };
            button: {
                type: string;
                additionalProperties: boolean;
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
                    primary: {
                        type: string;
                    };
                    size: {
                        type: string;
                        enum: string[];
                    };
                    theme: {
                        type: string;
                        enum: string[];
                    };
                    img: {
                        oneOf: ({
                            type: string;
                            optionName: string;
                            additionalProperties?: undefined;
                            required?: undefined;
                            properties?: undefined;
                        } | {
                            type: string;
                            additionalProperties: boolean;
                            required: string[];
                            properties: {
                                data: {
                                    type: string;
                                };
                                position: {
                                    type: string;
                                    enum: string[];
                                };
                                alt: {
                                    type: string;
                                    contentType: string;
                                };
                            };
                            optionName: string;
                        })[];
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
                    target: {
                        type: string;
                        enum: string[];
                    };
                    width: {
                        type: string;
                        enum: string[];
                    };
                };
                if: {
                    properties: {
                        theme: {
                            enum: string[];
                        };
                    };
                };
                then: {
                    required: string[];
                };
                else: {
                    required: string[];
                };
            };
            animated: {
                type: string;
            };
            type: {};
            when: {
                type: string;
            };
        };
    };
};
