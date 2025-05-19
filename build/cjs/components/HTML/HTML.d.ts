import React from 'react';
import { QAProps } from '../../models/common';
export interface HTMLProps {
    children?: string;
    block?: boolean;
    className?: string;
    itemProp?: string;
    id?: string;
}
declare const HTML: ({ children, block, className, itemProp, id, qa, }: React.PropsWithChildren<HTMLProps & QAProps>) => React.DetailedReactHTMLElement<{
    dangerouslySetInnerHTML: {
        __html: string | (string & React.ReactElement<any, string | React.JSXElementConstructor<any>>) | (string & React.ReactFragment) | (string & React.ReactPortal);
    };
    className: string | undefined;
    itemProp: string | undefined;
    id: string | undefined;
    'data-qa': string | undefined;
}, HTMLElement> | null;
export default HTML;
