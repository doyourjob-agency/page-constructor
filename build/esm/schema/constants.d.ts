import { BlockType } from '../models';
export declare const blockSchemas: Record<BlockType, object>;
export declare const cardSchemas: {
    card: {
        additionalProperties: boolean;
        required: string[];
        properties: {
            header: {
                type: string;
                additionalProperties: boolean;
                required: string[];
                properties: {
                    image: {
                        type: string;
                    };
                    title: {
                        type: string;
                    };
                };
            };
            text: {
                type: string;
            };
            service: {
                type: string;
                additionalProperties: boolean;
                required: string[];
                properties: {
                    slug: {
                        type: string;
                    };
                    name: {
                        type: string;
                    };
                };
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
    'content-layout-card': {
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
    'image-card': {
        additionalProperties: boolean;
        required: string[];
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
            direction: {
                type: string;
                enum: string[];
            };
            margins: {
                type: string;
                enum: string[];
            };
            backgroundColor: {
                type: string;
            };
            url: {
                type: string;
            };
            urlTitle: {
                type: string;
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
            controlPosition: {
                type: string;
                enum: string[];
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
    'price-card': {
        additionalProperties: boolean;
        required: string[];
        properties: {
            theme: {
                type: string;
                enum: string[];
            };
            title: {
                type: string;
            };
            price: {
                type: string;
            };
            pricePeriod: {
                type: string;
            };
            priceDetails: {
                type: string;
            };
            description: {
                type: string;
            };
            buttons: {
                type: string;
                items: {
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
            };
            links: {
                type: string;
                items: {
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
            };
            backgroundColor: {
                type: string;
            };
            list: {
                type: string;
                items: {
                    type: string;
                };
            };
            controlPosition: {
                type: string;
                enum: string[];
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
    'basic-card': {
        additionalProperties: boolean;
        required: never[];
        properties: {
            url: {
                type: string;
            };
            urlTitle: {
                type: string;
            };
            icon: {
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
            target: {
                type: string;
                enum: string[];
            };
            iconPosition: {
                type: string;
                enum: string[];
            };
            controlPosition: {
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
            text: {
                type: string;
                contentType: string;
                inputType: string;
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
    quote: {
        additionalProperties: boolean;
        required: string[];
        properties: {
            text: {
                type: string;
                contentType: string;
            };
            yfmText: {
                type: string;
                contentType: string;
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
                    required: import("../models").Theme[];
                    properties: {};
                    optionName: string;
                })[];
            };
            logo: {
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
            url: {
                type: string;
            };
            urlTitle: {
                type: string;
            };
            buttonText: {
                type: string;
            };
            theme: {
                type: string;
                enum: string[];
            };
            author: {
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
            quoteType: {
                type: string;
                enum: import("../models").QuoteType[];
            };
            type: {};
            when: {
                type: string;
            };
        };
    };
    'background-card': {
        additionalProperties: boolean;
        required: string[];
        properties: {
            url: {
                type: string;
            };
            urlTitle: {
                type: string;
            };
            background: {
                oneOf: (({
                    required: string[];
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
                } & {
                    optionName: string;
                }) | {
                    type: string;
                    additionalProperties: boolean;
                    required: import("../models").Theme[];
                    properties: {};
                    optionName: string;
                })[];
            };
            backgroundColor: {
                type: string;
            };
            backgroundPosition: {
                type: string;
                enum: string[];
            };
            paddingBottom: {
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
            controlPosition: {
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
            text: {
                type: string;
                contentType: string;
                inputType: string;
            };
            theme: {
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
    'price-detailed': {
        additionalProperties: boolean;
        required: string[];
        properties: {
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
            description: {
                additionalProperties: boolean;
                required: never[];
                properties: {
                    titleSize: {
                        type: string;
                        enum: string[];
                    };
                    descriptionSize: {
                        type: string;
                        enum: string[];
                    };
                    titleColor: {
                        type: string;
                        enum: string[];
                    };
                };
            };
            details: {
                additionalProperties: boolean;
                required: never[];
                properties: {
                    titleSize: {
                        type: string;
                        enum: string[];
                    };
                    descriptionSize: {
                        type: string;
                        enum: string[];
                    };
                };
            };
            priceType: {
                type: string;
                enum: string[];
                default: string;
            };
            numberGroupItems: {
                type: string;
                enum: number[];
            };
            isCombined: {
                type: string;
            };
            useMixedView: {
                type: string;
            };
            foldable: {
                additionalProperties: boolean;
                required: string[];
                properties: {
                    title: {
                        type: string;
                        contentType: string;
                    };
                    size: {
                        type: string;
                        enum: string[];
                    };
                    titleColor: {
                        type: string;
                        enum: string[];
                    };
                };
            };
            labelsDefaultText: {
                additionalProperties: boolean;
                required: never[];
                properties: {};
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
                    required: import("../models").Theme[];
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
                    required: import("../models").Theme[];
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
                        enum: import("../models").MediaVideoControlsType[];
                    };
                    customControlsOptions: {
                        type: string;
                        additionalProperties: boolean;
                        properties: {
                            type: {
                                type: string;
                                enum: import("../models").CustomControlsType[];
                            };
                            muteButtonShown: {
                                type: string;
                            };
                            positioning: {
                                type: string;
                                enum: import("../models").CustomControlsButtonPositioning[];
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
export declare const constructorBlockSchemaNames: string[];
export declare const constructorCardSchemaNames: string[];
