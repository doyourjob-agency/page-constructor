"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const hooks_1 = require("../../hooks");
const models_1 = require("../../models");
const utils_1 = require("../../utils");
const i18n_1 = require("./i18n");
const b = (0, utils_1.block)('header-breadcrumbs');
function HeaderBreadcrumbs(props) {
    const { items, theme = 'light', className, analyticsEvents } = props;
    const handleAnalytics = (0, hooks_1.useAnalytics)(models_1.DefaultEventNames.Breadcrumb);
    const onClick = (0, react_1.useCallback)(() => {
        handleAnalytics(analyticsEvents);
    }, [analyticsEvents, handleAnalytics]);
    return (react_1.default.createElement("nav", { className: b({ theme }, className), "aria-label": (0, i18n_1.i18n)('label') },
        react_1.default.createElement("ol", { className: b('list') }, items === null || items === void 0 ? void 0 : items.map(({ url, text }) => (react_1.default.createElement("li", { className: b('item'), key: url },
            react_1.default.createElement("a", { href: url, className: b('text'), onClick: onClick }, text),
            react_1.default.createElement("span", { className: b('separator'), "aria-hidden": true }, "/")))))));
}
exports.default = HeaderBreadcrumbs;
