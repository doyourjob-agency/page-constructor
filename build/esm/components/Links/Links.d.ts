import React from 'react';
import { ContentSize, LinkProps } from '../../models';
import './Links.css';
type LinksProps = {
    className?: string;
    titleId?: string;
    links?: LinkProps[];
    size?: ContentSize;
    qa?: string;
    linkQa?: string;
};
declare const Links: React.FC<LinksProps>;
export default Links;
