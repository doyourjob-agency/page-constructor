"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const icons_1 = require("@gravity-ui/icons");
const uikit_1 = require("@gravity-ui/uikit");
const locationContext_1 = require("../../context/locationContext");
const hooks_1 = require("../../hooks");
const models_1 = require("../../models");
function BackLink(props) {
    const { history } = (0, react_1.useContext)(locationContext_1.LocationContext);
    const { url, title, theme = 'default', size = 'l', className, shouldHandleBackAction = false, onClick, tabIndex, extraProps, } = props;
    const handleAnalytics = (0, hooks_1.useAnalytics)(models_1.DefaultEventNames.ShareButton, url);
    const backActionHandler = (0, react_1.useCallback)(async () => {
        handleAnalytics();
        if (!history) {
            return;
        }
        if (onClick) {
            onClick();
        }
        if (history.length > 1) {
            history.goBack();
        }
        else {
            history.push({ pathname: url });
        }
    }, [handleAnalytics, history, onClick, url]);
    return (react_1.default.createElement(uikit_1.Button, { className: className, view: theme === 'special' ? 'flat-contrast' : 'flat-secondary', size: size, href: shouldHandleBackAction ? undefined : url, onClick: shouldHandleBackAction ? backActionHandler : undefined, tabIndex: tabIndex, extraProps: extraProps },
        react_1.default.createElement(uikit_1.Icon, { data: icons_1.ArrowLeft, size: 20 }),
        react_1.default.createElement("span", null, title)));
}
exports.default = BackLink;
