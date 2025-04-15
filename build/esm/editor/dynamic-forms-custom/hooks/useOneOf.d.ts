import { ObjectIndependentInputProps, Spec, SpecTypes } from '@gravity-ui/dynamic-forms';
export interface UseOneOfParams {
    props: ObjectIndependentInputProps;
    onTogglerChange?: (value: string) => void;
}
export declare const getSpecTypeDefaultValue: (type: SpecTypes) => {} | undefined;
export declare const useOneOf: ({ props, onTogglerChange }: UseOneOfParams) => {
    oneOfValue: string;
    specProperties: Record<string, Spec<any, undefined, undefined>>;
    toggler: JSX.Element;
    togglerInput: JSX.Element;
};
