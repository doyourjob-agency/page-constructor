"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const icons_1 = require("@gravity-ui/icons");
const uikit_1 = require("@gravity-ui/uikit");
const localeContext_1 = require("../../context/localeContext");
const locationContext_1 = require("../../context/locationContext");
const hooks_1 = require("../../hooks");
const models_1 = require("../../models");
const utils_1 = require("../../utils");
const index_1 = require("../../utils/index");
const BackLink_1 = tslib_1.__importDefault(require("../BackLink/BackLink"));
const FileLink_1 = tslib_1.__importDefault(require("../FileLink/FileLink"));
const b = (0, utils_1.block)('link-block');
const WORD_JOINER_SYM = '\u200b';
function getArrowSize(size) {
    switch (size) {
        case 'l':
            return 20;
        case 'm':
            return 18;
        case 's':
            return 14;
        default:
            return 14;
    }
}
const LinkBlock = (props) => {
    const { text, url, arrow, analyticsEvents, theme = 'file-link', colorTheme = 'light', textSize = 'm', className, target, children, tabIndex, qa, urlTitle, extraProps, } = props;
    const qaAttributes = (0, index_1.getQaAttrubutes)(qa, ['normal']);
    const handleAnalytics = (0, hooks_1.useAnalytics)(models_1.DefaultEventNames.Link, url);
    const { hostname } = (0, react_1.useContext)(locationContext_1.LocationContext);
    const { tld } = (0, react_1.useContext)(localeContext_1.LocaleContext);
    const href = (0, utils_1.setUrlTld)(props.url, tld);
    const defaultTextSize = theme === 'back' ? 'l' : 'm';
    const onClick = () => {
        handleAnalytics(analyticsEvents);
    };
    const getLinkByType = () => {
        switch (theme) {
            case 'back':
                return (react_1.default.createElement(BackLink_1.default, { title: children || text, url: href, onClick: onClick, tabIndex: tabIndex, extraProps: extraProps }));
            case 'file-link':
            case 'underline':
                return (react_1.default.createElement(FileLink_1.default, { text: children || text, href: href, type: "horizontal", textSize: textSize, onClick: onClick, tabIndex: tabIndex, extraProps: extraProps }));
            case 'normal': {
                const linkProps = (0, utils_1.getLinkProps)(url, hostname, target);
                const content = children || text;
                return (react_1.default.createElement("a", Object.assign({ className: b('link', { theme: colorTheme, 'has-arrow': arrow }), href: href, onClick: onClick, tabIndex: tabIndex, title: urlTitle }, linkProps, { "data-qa": qaAttributes.normal }, extraProps), arrow ? (react_1.default.createElement(react_1.Fragment, null,
                    react_1.default.createElement("span", { className: b('content') }, content),
                    WORD_JOINER_SYM,
                    react_1.default.createElement(uikit_1.Icon, { className: b('arrow'), data: icons_1.ChevronRight, size: getArrowSize(textSize) }))) : (content)));
            }
            default:
                return null;
        }
    };
    return (react_1.default.createElement("div", { className: b({ size: textSize || defaultTextSize }, className) }, getLinkByType()));
};
exports.default = LinkBlock;
