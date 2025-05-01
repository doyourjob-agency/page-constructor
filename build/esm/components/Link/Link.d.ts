import React from 'react';
import { ClassNameProps, LinkProps, Tabbable } from '../../models';
import { QAProps } from '../../models/common';
import './Link.css';
export type LinkFullProps = LinkProps & ClassNameProps & Tabbable & QAProps;
declare const LinkBlock: (props: React.PropsWithChildren<LinkFullProps>) => JSX.Element;
export default LinkBlock;
