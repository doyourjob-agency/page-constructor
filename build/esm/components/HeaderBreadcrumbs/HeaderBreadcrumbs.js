import React, { useCallback } from 'react';
import { useAnalytics } from '../../hooks';
import { DefaultEventNames } from '../../models';
import { block } from '../../utils';
import { i18n } from './i18n';
import './HeaderBreadcrumbs.css';
const b = block('header-breadcrumbs');
export default function HeaderBreadcrumbs(props) {
    const { items, theme = 'light', className, analyticsEvents } = props;
    const handleAnalytics = useAnalytics(DefaultEventNames.Breadcrumb);
    const onClick = useCallback(() => {
        handleAnalytics(analyticsEvents);
    }, [analyticsEvents, handleAnalytics]);
    return (React.createElement("nav", { className: b({ theme }, className), "aria-label": i18n('label') },
        React.createElement("ol", { className: b('list') }, items === null || items === void 0 ? void 0 : items.map(({ url, text }) => (React.createElement("li", { className: b('item'), key: url },
            React.createElement("a", { href: url, className: b('text'), onClick: onClick }, text),
            React.createElement("span", { className: b('separator'), "aria-hidden": true }, "/")))))));
}
