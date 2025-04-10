import React from 'react';
export interface RouterLinkProps {
    href: string;
    [key: string]: unknown;
}
declare const RouterLink: ({ href, children }: React.PropsWithChildren<RouterLinkProps>) => JSX.Element;
export default RouterLink;
