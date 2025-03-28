import { Schema } from '../../../schema';
import { CustomObjectSpec, CustomSpec } from './types';
interface BaseParams {
    layoutTitle?: string;
}
interface GetObjectViewSpecParams extends BaseParams, Partial<Extract<CustomSpec, CustomObjectSpec>> {
    layout?: string;
}
type GetPrimitiveViewSpecParams = BaseParams & Schema;
export declare const getOneOfViewSpec: ({ layoutTitle }: BaseParams) => {
    type: string;
    layout: string;
    layoutTitle: string | undefined;
    oneOfParams: {
        toggler: "select";
    };
};
export declare const getObjectViewSpec: ({ properties, disabled, layoutTitle, layout, }: GetObjectViewSpecParams) => {
    layoutTitle: string | undefined;
    type: string;
    layout: string;
    order: string[] | undefined;
    disabled: boolean | undefined;
};
export declare const getArrayViewSpec: ({ layoutTitle }: BaseParams) => {
    layoutTitle: string | undefined;
    type: string;
    layout: string;
    layoutOpen: boolean;
    itemLabel: string;
};
export declare const getPrimitiveViewSpec: ({ layoutTitle, ...data }: GetPrimitiveViewSpecParams) => {
    layout: string;
    type: any;
    layoutTitle: string | undefined;
};
export {};
