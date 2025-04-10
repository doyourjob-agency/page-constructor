import React from 'react';
import { CardLayoutBlockProps as CardLayoutBlockParams, ClassNameProps } from '../../models';
export type CardLayoutBlockProps = React.PropsWithChildren<Omit<CardLayoutBlockParams, 'children'>> & ClassNameProps;
declare const CardLayout: React.FC<CardLayoutBlockProps>;
export default CardLayout;
