import React from 'react';
import { ButtonSize } from '@gravity-ui/uikit';
import { ButtonProps, QAProps } from '../../models';
import './ButtonTabs.css';
export interface ButtonTabsItemProps extends Omit<ButtonProps, 'url' | 'primary' | 'target' | 'text'> {
    id: string | null;
    title: string;
}
export interface ButtonTabsProps extends QAProps {
    className?: string;
    items: ButtonTabsItemProps[];
    activeTab?: string | null;
    onSelectTab?: (tabId: string | null, e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    tabSize?: ButtonSize;
}
declare const ButtonTabs: React.FC<ButtonTabsProps>;
export default ButtonTabs;
