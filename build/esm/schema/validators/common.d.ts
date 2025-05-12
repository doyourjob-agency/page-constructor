import { CustomControlsButtonPositioning, CustomControlsType, MediaVideoControlsType, QuoteType, Theme } from '../../models';
export declare const mediaDirection: string[];
export declare const textSize: string[];
export declare const titleTextSize: string[];
export declare const containerSizesArray: string[];
export declare const sliderSizesArray: string[];
export declare const contentSizes: string[];
export declare const contentTextWidth: string[];
export declare const videoTypes: string[];
export declare const playIconTypes: string[];
export declare const playIconThemes: string[];
export declare const videoControlsTypes: MediaVideoControlsType[];
export declare const fileLinkTypes: string[];
export declare const dividerEnum: {
    enum: string[];
};
export declare const sizeNumber: {
    type: string;
    maximum: number;
    minimum: number;
};
export declare const contentThemes: string[];
export declare const quoteTypes: QuoteType[];
export declare const mediaView: string[];
export declare const customControlsType: CustomControlsType[];
export declare const customControlsButtonPositioning: CustomControlsButtonPositioning[];
export declare const BaseProps: {
    type: {};
    when: {
        type: string;
    };
};
export declare const CardLayoutProps: {
    controlPosition: {
        type: string;
        enum: string[];
    };
};
export declare const containerSizesObject: {
    type: string;
    additionalProperties: boolean;
    properties: {};
};
export declare const sliderSizesObject: {
    oneOf: ({
        type: string;
        additionalProperties: boolean;
        properties: {};
        optionName: string;
    } | {
        type: string;
        optionName: string;
        additionalProperties?: undefined;
        properties?: undefined;
    })[];
};
export declare const AnimatableProps: {
    animated: {
        type: string;
    };
};
export declare const ChildrenProps: {
    type: string;
    items: {
        $ref: string;
    };
};
export declare const ChildrenCardsProps: {
    type: string;
    items: {
        $ref: string;
    };
};
export declare const LoopProps: {
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
};
export declare const PlayButtonProps: {
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
export declare const CustomControlsOptionsProps: {
    type: string;
    additionalProperties: boolean;
    properties: {
        type: {
            type: string;
            enum: CustomControlsType[];
        };
        muteButtonShown: {
            type: string;
        };
        positioning: {
            type: string;
            enum: CustomControlsButtonPositioning[];
        };
    };
};
export declare const VideoProps: {
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
            enum: MediaVideoControlsType[];
        };
        customControlsOptions: {
            type: string;
            additionalProperties: boolean;
            properties: {
                type: {
                    type: string;
                    enum: CustomControlsType[];
                };
                muteButtonShown: {
                    type: string;
                };
                positioning: {
                    type: string;
                    enum: CustomControlsButtonPositioning[];
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
export declare const ThemeProps: {
    type: string;
    enum: string[];
};
export declare const JustifyProps: {
    type: string;
    enum: string[];
};
export declare const DataLensObjectProps: {
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
};
export declare const DataLensProps: {
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
export declare const BackgroundProps: {
    additionalProperties: boolean;
    properties: {
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
        color: {
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
                    enum: MediaVideoControlsType[];
                };
                customControlsOptions: {
                    type: string;
                    additionalProperties: boolean;
                    properties: {
                        type: {
                            type: string;
                            enum: CustomControlsType[];
                        };
                        muteButtonShown: {
                            type: string;
                        };
                        positioning: {
                            type: string;
                            enum: CustomControlsButtonPositioning[];
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
        height: {
            type: string;
        };
        size: {
            type: string;
            enum: string[];
        };
        parallax: {
            type: string;
        };
        fullWidthMedia: {
            type: string;
        };
        animated: {
            type: string;
        };
    };
};
export declare const LinkProps: {
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
export declare const FileLinkProps: {
    type: string;
    additionalProperties: boolean;
    required: string[];
    properties: {
        href: {
            type: string;
        };
        text: {
            type: string;
            contentType: string;
        };
        type: {
            type: string;
            enum: string[];
        };
        textSize: {
            type: string;
            enum: string[];
        };
        theme: {
            type: string;
            enum: string[];
        };
    };
};
export declare const authorItem: {
    type: string;
    required: string[];
    properties: {
        firstName: {
            type: string;
            contentType: string;
        };
        secondName: {
            type: string;
            contentType: string;
        };
        avatar: {
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
        description: {
            type: string;
            contentType: string;
        };
    };
};
export declare const ButtonProps: {
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
export declare const MenuProps: {
    type: string;
    additionalProperties: boolean;
    properties: {
        title: {
            type: string;
            contentType: string;
        };
    };
};
export declare function withTheme<T extends object>(value: T): {
    oneOf: ((T & {
        optionName: string;
    }) | {
        type: string;
        additionalProperties: boolean;
        required: Theme[];
        properties: {};
        optionName: string;
    })[];
};
export declare const AnchorProps: {
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
export declare const BlockBaseProps: {
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
export declare const TitleProps: {
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
};
export declare const ButtonBlock: {
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
export declare const MediaProps: {
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
                enum: MediaVideoControlsType[];
            };
            customControlsOptions: {
                type: string;
                additionalProperties: boolean;
                properties: {
                    type: {
                        type: string;
                        enum: CustomControlsType[];
                    };
                    muteButtonShown: {
                        type: string;
                    };
                    positioning: {
                        type: string;
                        enum: CustomControlsButtonPositioning[];
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
export declare const YMapMarkerLabel: {
    type: string;
    required: never[];
    properties: {
        iconCaption: {
            type: string;
        };
        iconContent: {
            type: string;
        };
        iconColor: {
            type: string;
        };
        preset: {
            type: string;
        };
    };
};
export declare const YMapMarker: {
    type: string;
    additionalProperties: boolean;
    required: never[];
    properties: {
        coordinate: {
            type: string;
            items: {
                type: string;
            };
        };
        address: {
            type: string;
        };
        label: {
            type: string;
            required: never[];
            properties: {
                iconCaption: {
                    type: string;
                };
                iconContent: {
                    type: string;
                };
                iconColor: {
                    type: string;
                };
                preset: {
                    type: string;
                };
            };
        };
    };
};
export declare const MapProps: {
    zoom: {
        type: string;
    };
    address: {
        type: string;
    };
    id: {
        type: string;
    };
    markers: {
        type: string;
        items: {
            type: string;
            additionalProperties: boolean;
            required: never[];
            properties: {
                coordinate: {
                    type: string;
                    items: {
                        type: string;
                    };
                };
                address: {
                    type: string;
                };
                label: {
                    type: string;
                    required: never[];
                    properties: {
                        iconCaption: {
                            type: string;
                        };
                        iconContent: {
                            type: string;
                        };
                        iconColor: {
                            type: string;
                        };
                        preset: {
                            type: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const BorderProps: {
    type: string;
    enum: string[];
};
export declare const CardBase: {
    border: {
        type: string;
        enum: string[];
    };
};
export declare const BlockHeaderProps: {
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
};
