import React, { PropsWithChildren } from 'react';
import { EditModeItem, ViewModeItem } from '../../types';
export interface LayoutProps {
    editMode: EditModeItem;
    viewMode: ViewModeItem;
}
declare const Layout: {
    ({ children, editMode, viewMode }: PropsWithChildren<LayoutProps>): JSX.Element;
    Left: React.FC<{
        children?: React.ReactNode;
    }>;
    Right: React.FC<{
        children?: React.ReactNode;
    }>;
};
export default Layout;
