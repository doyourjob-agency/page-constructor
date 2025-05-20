export declare const PostCard: {
    'post-card': {
        additionalProperties: boolean;
        required: never[];
        properties: {
            url: {
                type: string;
            };
            title: {
                type: string;
            };
            date: {
                type: string;
            };
            readingTime: {
                type: string;
            };
            image: {
                type: string;
            };
            description: {
                type: string;
            };
            tags: {
                type: string;
                items: {
                    type: string;
                    additionalProperties: boolean;
                    required: string[];
                    properties: {
                        name: {
                            type: string;
                        };
                        slug: {
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
