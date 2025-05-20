import { BlockDecorationProps, BlockDecorator, CustomConfig } from '../../models';
import { ViewModeItem } from '../types';
export declare const formatBlockName: (name: string) => string;
export declare const addCustomDecorator: (decorators: BlockDecorator[], custom?: CustomConfig) => {
    decorators: {
        block: ((props: BlockDecorationProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>)[];
    };
    blocks?: import("../../models").CustomItems | undefined;
    subBlocks?: import("../../models").CustomItems | undefined;
    headers?: import("../../models").CustomItems | undefined;
    navigation?: import("../../models").CustomItems | undefined;
    loadable?: import("../../models").LoadableConfig | undefined;
};
export declare const getBlockId: ({ index, type }: BlockDecorationProps) => string;
export declare const checkIsMobile: (viewMode: ViewModeItem) => boolean;
