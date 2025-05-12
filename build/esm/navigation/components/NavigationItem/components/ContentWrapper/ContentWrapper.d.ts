import React from 'react';
import { ImageProps } from '../../../../../models';
import './ContentWrapper.css';
interface ContentWrapperProps {
    text: string;
    icon?: ImageProps;
    iconSize?: number;
}
export declare const ContentWrapper: React.FC<ContentWrapperProps>;
export {};
