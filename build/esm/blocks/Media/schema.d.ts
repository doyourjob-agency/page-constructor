export declare const Media: {
    type: string;
    additionalProperties: boolean;
    required: never[];
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
};
export declare const MediaBlockBaseProps: {
    description: {
        type: string;
        contentType: string;
    };
    direction: {
        type: string;
        enum: string[];
    };
    mobileDirection: {
        type: string;
        enum: string[];
    };
    largeMedia: {
        type: string;
    };
    smallMedia: {
        type: string;
    };
    mediaOnly: {
        type: string;
    };
    /**
     * @deprecated use border='none' or border='line' instead
     */
    disableShadow: {
        type: string;
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
    mediaOnlyColSizes: {
        type: string;
        additionalProperties: boolean;
        properties: {};
    };
    border: {
        type: string;
        enum: string[];
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
    size: {
        type: string;
        enum: string[];
    };
    subtitle: {
        type: string;
    };
    additionalInfo: {
        type: string;
        contentType: string;
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
export declare const MediaBlock: {
    'media-block': {
        additionalProperties: boolean;
        required: string[];
        properties: {
            media: {
                oneOf: (({
                    type: string;
                    additionalProperties: boolean;
                    required: never[];
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
            description: {
                type: string;
                contentType: string;
            };
            direction: {
                type: string;
                enum: string[];
            };
            mobileDirection: {
                type: string;
                enum: string[];
            };
            largeMedia: {
                type: string;
            };
            smallMedia: {
                type: string;
            };
            mediaOnly: {
                type: string;
            };
            /**
             * @deprecated use border='none' or border='line' instead
             */
            disableShadow: {
                type: string;
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
            mediaOnlyColSizes: {
                type: string;
                additionalProperties: boolean;
                properties: {};
            };
            border: {
                type: string;
                enum: string[];
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
            size: {
                type: string;
                enum: string[];
            };
            subtitle: {
                type: string;
            };
            additionalInfo: {
                type: string;
                contentType: string;
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
