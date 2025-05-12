import { Options, Output } from '@diplodoc/transform';
import sanitize from 'sanitize-html';
import { Lang } from './types';
import AddRuleOptions = typograf.AddRuleOptions;
export declare enum TransformType {
    Text = "text",
    Html = "html"
}
interface TransformOptions extends Options {
    lang: Lang;
}
export declare const DEFAULT_ALLOWED_TAGS: string[];
export declare const typografConfig: {
    enabled: string[];
    disabled: string[];
};
export declare const sanitizeStripOptions: sanitize.IOptions;
export declare function addTypografRules(options: AddRuleOptions[]): void;
export declare function typograf(text: string, lang?: Lang): string;
export declare function sanitizeHtml(html: string, options?: sanitize.IOptions): string;
export declare function typografToHTML(text: string, lang: Lang, allowedTags?: string[]): string;
export declare function typografToText(text: string, lang: Lang): string;
export declare const transformMarkdown: (input: string, options: TransformOptions) => Output['result'];
export declare function fullTransform(input: string, { lang, ...options }: TransformOptions): Output['result'];
export interface TypografEntityParams {
    entity: Record<string, string>;
    fields: string[];
    lang: Lang;
    transformType: TransformType;
}
export declare function typografEntity({ entity, fields, lang, transformType, }: TypografEntityParams): Record<string, string>;
export {};
