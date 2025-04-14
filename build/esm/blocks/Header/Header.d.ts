import React from 'react';
import { ClassNameProps, HeaderBlockProps } from '../../models';
import './Header.css';
type HeaderBlockFullProps = HeaderBlockProps & ClassNameProps;
export declare const HeaderBlock: (props: React.PropsWithChildren<HeaderBlockFullProps>) => JSX.Element;
export default HeaderBlock;
