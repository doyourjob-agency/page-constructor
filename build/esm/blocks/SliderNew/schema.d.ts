export declare const SliderNewProps: {
    dots: {
        type: string;
    };
    arrows: {
        type: string;
    };
    randomOrder: {
        type: string;
    };
    autoplay: {
        type: string;
    };
    type: {
        type: string;
    };
    adaptive: {
        type: string;
    };
    arrowSize: {
        type: string;
    };
    animated: {
        animated: {
            type: string;
        };
    };
    slidesToShow: {
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
    disclaimer: {
        additionalProperties: boolean;
        required: string[];
        properties: {
            text: {
                type: string;
                contentType: string;
            };
            size: {
                type: string;
                enum: string[];
            };
        };
    };
    loadable: {
        additionalProperties: boolean;
        required: string[];
        properties: {
            source: {
                type: string;
            };
            /**
             * @deprecated
             */
            minCount: {
                type: string;
            };
            params: {
                type: string;
                patternProperties: {
                    '.*': {
                        type: string[];
                    };
                };
            };
        };
        disabled: boolean;
    };
    children: {
        type: string;
        items: {
            $ref: string;
        };
    };
};
export declare const SliderNewBlock: {
    'slider-new-block': {
        additionalProperties: boolean;
        required: never[];
        properties: {
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
            dots: {
                type: string;
            };
            arrows: {
                type: string;
            };
            randomOrder: {
                type: string;
            };
            autoplay: {
                type: string;
            };
            type: {
                type: string;
            };
            adaptive: {
                type: string;
            };
            arrowSize: {
                type: string;
            };
            animated: {
                animated: {
                    type: string;
                };
            };
            slidesToShow: {
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
            disclaimer: {
                additionalProperties: boolean;
                required: string[];
                properties: {
                    text: {
                        type: string;
                        contentType: string;
                    };
                    size: {
                        type: string;
                        enum: string[];
                    };
                };
            };
            loadable: {
                additionalProperties: boolean;
                required: string[];
                properties: {
                    source: {
                        type: string;
                    };
                    /**
                     * @deprecated
                     */
                    minCount: {
                        type: string;
                    };
                    params: {
                        type: string;
                        patternProperties: {
                            '.*': {
                                type: string[];
                            };
                        };
                    };
                };
                disabled: boolean;
            };
            children: {
                type: string;
                items: {
                    $ref: string;
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
            when: {
                type: string;
            };
        };
    };
};
