export declare const Card: {
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
};
