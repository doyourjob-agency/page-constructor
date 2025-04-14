"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationLink = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const components_1 = require("../../../../../components");
const utils_1 = require("../../../../../components/Media/Image/utils");
const locationContext_1 = require("../../../../../context/locationContext");
const icons_1 = require("../../../../../icons");
const utils_2 = require("../../../../../utils");
const ContentWrapper_1 = require("../ContentWrapper/ContentWrapper");
const b = (0, utils_2.block)('navigation-link');
const NavigationLink = (props) => {
    const { hostname, Link } = (0, react_1.useContext)(locationContext_1.LocationContext);
    const { url, text, icon, arrow, target, className, iconSize, urlTitle } = props, rest = tslib_1.__rest(props, ["url", "text", "icon", "arrow", "target", "className", "iconSize", "urlTitle"]);
    const linkExtraProps = (0, utils_2.getLinkProps)(url, hostname, target);
    const iconData = icon && (0, utils_1.getMediaImage)(icon);
    const classes = b(null, className);
    const content = (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(ContentWrapper_1.ContentWrapper, { text: text, icon: iconData, iconSize: iconSize }),
        arrow && react_1.default.createElement(icons_1.NavigationArrow, { className: b('arrow') })));
    if ((linkExtraProps === null || linkExtraProps === void 0 ? void 0 : linkExtraProps.target) || !Link) {
        return (react_1.default.createElement("a", Object.assign({ href: url, title: urlTitle || text, className: classes }, rest, linkExtraProps), content));
    }
    else {
        return (react_1.default.createElement(components_1.RouterLink, { href: url, passHref: true },
            react_1.default.createElement("a", Object.assign({ title: urlTitle || text }, rest, { className: classes }), content)));
    }
};
exports.NavigationLink = NavigationLink;
