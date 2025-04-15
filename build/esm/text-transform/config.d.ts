import { TitleItemProps } from '../models';
import { Parser, Transformer, TransformerRaw, typografTransformer, yfmTransformer } from './common';
export declare const blockHeaderTransformer: ({
    fields: string[];
    transformer: typeof typografTransformer;
    parser: (transformer: Transformer, title: TitleItemProps | string) => string | {
        text: string;
        navTitle?: string | undefined;
        anchor?: string | undefined;
        justify?: import("../models").Justify | undefined;
        textSize?: import("../models").TitleTextSize | undefined;
        url?: string | undefined;
        urlTitle?: string | undefined;
        custom?: import("react").ReactNode;
        onClick?: (() => void) | undefined;
    };
} | {
    fields: string[];
    transformer: typeof yfmTransformer;
    parser?: undefined;
})[];
interface BlockConfig {
    transformer: TransformerRaw;
    fields?: string[];
    parser?: Parser;
}
export type BlocksConfig = Record<string, BlockConfig | BlockConfig[]>;
export declare const config: BlocksConfig;
export {};
