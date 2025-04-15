import React from 'react';
import { ClassNameProps, HeaderBlockProps } from '../../models';
type HeaderBlockFullProps = HeaderBlockProps & ClassNameProps;
export declare const HeaderBlock: (props: React.PropsWithChildren<HeaderBlockFullProps>) => JSX.Element;
export default HeaderBlock;
