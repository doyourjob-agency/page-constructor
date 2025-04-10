import { JSONSchema4 } from 'json-schema';
import { CodeEditorMessageProps } from '../utils/validation';
export type CodeValidator = (code: string) => CodeEditorMessageProps;
export declare function useCodeValidator(schema: JSONSchema4): CodeValidator;
