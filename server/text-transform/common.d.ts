import { MarkdownItPluginCb } from '@diplodoc/transform/lib/plugins/typings';
import { Lang } from './types';
export type ComplexItem = {
    [key: string]: string;
};
export type Item = string | null | ComplexItem;
export type Transformer = (text: string) => string;
export type TransformerRaw = (lang: Lang, content: string, options: {
    plugins: MarkdownItPluginCb[];
}) => string;
export type Parser<T = any> = (transformer: Transformer, block: T) => T;
export declare const createItemsParser: (fields: string[]) => (transformer: Transformer, items: Item[]) => (string | {
    [x: string]: string;
} | null)[];
export declare function yfmTransformer(lang: Lang, content: string, options?: {
    plugins?: MarkdownItPluginCb[];
}): string;
export declare function typografTransformer(lang: Lang, content: string): string;
