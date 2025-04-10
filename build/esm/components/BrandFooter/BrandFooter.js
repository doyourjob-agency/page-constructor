import React from 'react';
import { Link } from '@gravity-ui/uikit';
import { useTheme } from '../../context/theme';
import { BrandIconDark } from '../../icons/BrandIconDark';
import { BrandIconLight } from '../../icons/BrandIconLight';
import { BrandName } from '../../icons/BrandName';
import { Theme } from '../../models';
import { block } from '../../utils';
import { i18n } from './i18n';
import './BrandFooter.css';
const b = block('brand-footer');
const BrandFooter = ({ className }) => {
    const theme = useTheme();
    return (React.createElement(Link, { className: b({ theme }, className), href: "https://gravity-ui.com" },
        React.createElement("div", { className: b('content') },
            React.createElement("span", { className: b('text') }, i18n('created-on')),
            React.createElement("div", { className: b('brand-icon') }, theme === Theme.Light ? React.createElement(BrandIconLight, null) : React.createElement(BrandIconDark, null)),
            React.createElement("div", { className: b('brand-name') },
                React.createElement(BrandName, null)))));
};
export default BrandFooter;
