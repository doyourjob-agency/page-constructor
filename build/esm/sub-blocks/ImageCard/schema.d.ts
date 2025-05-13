export declare const ImageCard: {
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
};
