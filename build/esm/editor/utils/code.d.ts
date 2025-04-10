export declare function parseCode(code: string): {
    blocks: import("../../models").ConstructorBlock[];
    menu?: import("../../models").Menu | undefined;
    background?: import("../../models").ThemedMediaProps | undefined;
    animated?: boolean | undefined;
};
