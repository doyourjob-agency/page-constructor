import React from 'react';
import '@diplodoc/transform/dist/js/yfm';
import { blockMap, navItemMap, subBlockMap } from '../../constructor-items';
import { CustomConfig, CustomItems, NavigationData, PageContent, ShouldRenderBlock } from '../../models';
import './PageConstructor.css';
export type ItemMap = typeof blockMap & typeof subBlockMap & CustomItems;
export type NavItemMap = typeof navItemMap & CustomItems;
export interface PageConstructorProps {
    content?: PageContent;
    shouldRenderBlock?: ShouldRenderBlock;
    custom?: CustomConfig;
    renderMenu?: () => React.ReactNode;
    navigation?: NavigationData;
    isBranded?: boolean;
    microdata?: {
        contentUpdatedDate?: string;
    };
}
export declare const Constructor: (props: PageConstructorProps) => JSX.Element;
export declare const PageConstructor: (props: PageConstructorProps) => JSX.Element;
