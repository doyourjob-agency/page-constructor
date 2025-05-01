export declare const imageUrlPattern = "^(files\\.[^:\\s]+|((http[s]?|ftp):\\/)?\\/?([^:\\/\\s]+)((\\/\\w+)*\\/)([\\w\\-\\.]+[^#?\\s]+)(.*)?(#[\\w\\-]+)?)$";
export declare const ImageDeviceProps: {
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
};
export declare const ImageBaseObjectProps: {
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
};
export declare const ImageObjectProps: {
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
};
export declare const ImageProps: {
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
export declare const BackgroundImageProps: {
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
