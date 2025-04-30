import React from 'react';
import { Lang } from '@gravity-ui/uikit';
export type LocaleContextProps = {
    lang?: `${Lang}`;
    tld?: string;
};
export declare const LocaleContext: React.Context<LocaleContextProps>;
