import React, { HTMLAttributeAnchorTarget, PropsWithChildren } from 'react';
import { AnalyticsEventsBase, CardBaseProps as CardBaseParams, ImageProps } from '../../models';
interface CardBaseProps extends AnalyticsEventsBase, CardBaseParams {
    className?: string;
    bodyClassName?: string;
    contentClassName?: string;
    url?: string;
    urlTitle?: string;
    target?: HTMLAttributeAnchorTarget;
    qa?: string;
    extraProps?: React.HTMLAttributes<HTMLElement>;
}
export type CardBasePropsType = PropsWithChildren<CardBaseProps>;
export interface CardHeaderBaseProps {
    className?: string;
    image?: ImageProps | null;
    imageExtraProps?: React.HTMLAttributes<HTMLImageElement>;
}
export interface CardFooterBaseProps {
    className?: string;
}
export declare const Layout: {
    (props: CardBasePropsType): JSX.Element;
    Header: React.FC<React.PropsWithChildren<CardHeaderBaseProps>>;
    Content: React.FC<{
        children?: React.ReactNode;
    }>;
    Footer: React.FC<React.PropsWithChildren<CardFooterBaseProps>>;
};
export default Layout;
