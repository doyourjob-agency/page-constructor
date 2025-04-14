export declare const Map: {
    type: string;
    additionalProperties: boolean;
    required: never[];
    properties: {
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
};
export declare const MapBlock: {
    'map-block': {
        additionalProperties: boolean;
        required: string[];
        properties: {
            map: {
                type: string;
                additionalProperties: boolean;
                required: never[];
                properties: {
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
