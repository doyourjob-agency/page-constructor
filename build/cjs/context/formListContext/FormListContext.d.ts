import React from 'react';
export type Form = {
    slug: string;
    title?: string | null;
    description?: string | null;
    region: string;
    portalId: string;
    formId: string;
};
export interface FormListContextProps {
    items: Form[];
}
export declare const FormListContext: React.Context<FormListContextProps>;
