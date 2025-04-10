import { HTMLProps, ReactNode } from 'react';
import { ButtonSize } from '@gravity-ui/uikit';
import { Tabbable } from '../../models';
export type Theme = 'default' | 'special';
export interface BackLinkProps<T = HTMLElement> extends Tabbable {
    url: string;
    title: ReactNode;
    theme?: Theme;
    size?: ButtonSize;
    className?: string;
    shouldHandleBackAction?: boolean;
    onClick?: () => void;
    extraProps?: HTMLProps<T>;
}
export default function BackLink(props: BackLinkProps): JSX.Element;
