export declare const MarqueeLink: {
    type: string;
    additionalProperties: boolean;
    required: string[];
    properties: {
        src: {
            type: string;
        };
        url: {
            type: string;
        };
    };
};
export declare const MarqueeLinksBlock: {
    'marquee-links-block': {
        additionalProperties: boolean;
        required: string[];
        properties: {
            title: {
                type: string;
            };
            description: {
                type: string;
            };
            textAlign: {
                type: string;
                enum: string[];
            };
            speed: {
                type: string;
            };
            items: {
                type: string;
                items: {
                    type: string;
                    additionalProperties: boolean;
                    required: string[];
                    properties: {
                        src: {
                            type: string;
                        };
                        url: {
                            type: string;
                        };
                    };
                };
            };
            type: {};
            when: {
                type: string;
            };
        };
    };
};
