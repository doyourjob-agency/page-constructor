export { validators } from './validators';
export type { ObjectSchema } from './validators/utils';
import type { JSONSchema4 } from 'json-schema';
export type Schema = JSONSchema4;
export type SchemaDefinitions = {
    [k: string]: Schema;
};
export interface SchemaCustomConfig {
    blocks?: Record<string, Schema>;
    cards?: Record<string, Schema>;
    extensions?: object;
}
export declare const getBlocksCases: (blocks: Schema) => any;
export declare function generateDefaultSchema(config?: SchemaCustomConfig): JSONSchema4;
