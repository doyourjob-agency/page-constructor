export declare const TableBlock: {
    'table-block': {
        additionalProperties: boolean;
        required: string[];
        properties: {
            title: {
                type: string;
                contentType: string;
            };
            description: {
                type: string;
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
            table: {
                additionalProperties: boolean;
                required: string[];
                properties: {
                    content: {
                        type: string;
                        items: {
                            type: string;
                            items: {
                                oneOf: {
                                    type: string;
                                    contentType: string;
                                    optionName: string;
                                }[];
                            };
                        };
                    };
                    legend: {
                        type: string;
                        items: {
                            type: string;
                            contentType: string;
                        };
                    };
                    hideLegend: {
                        type: string;
                    };
                    justify: {
                        type: string;
                        items: {
                            type: string;
                            enum: string[];
                        };
                    };
                    marker: {
                        type: string;
                        enum: string[];
                    };
                    caption: {
                        type: string;
                    };
                    type: {};
                    when: {
                        type: string;
                    };
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
            type: {};
            when: {
                type: string;
            };
        };
    };
};
