"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const hooks_1 = require("../../hooks");
const models_1 = require("../../models");
const utils_1 = require("../../utils");
const BackgroundImage_1 = tslib_1.__importDefault(require("../BackgroundImage/BackgroundImage"));
const RouterLink_1 = tslib_1.__importDefault(require("../RouterLink/RouterLink"));
const b = (0, utils_1.block)('card-base-block');
const Header = () => null;
const Content = () => null;
const Footer = () => null;
const Layout = (props) => {
    const { className, bodyClassName, analyticsEvents, contentClassName, children, url, target, border = 'shadow', urlTitle, qa, extraProps = {}, } = props;
    const handleAnalytics = (0, hooks_1.useAnalytics)(models_1.DefaultEventNames.CardBase, url);
    let header, content, footer, image, headerClass, footerClass;
    const qaAttributes = (0, utils_1.getQaAttrubutes)(qa, 'header', 'footer', 'body', 'content');
    function handleChild(child) {
        switch (child.type) {
            case Header:
                header = child.props.children;
                image = child.props.image;
                headerClass = child.props.className;
                break;
            case Content:
                content = child.props.children;
                break;
            case Footer:
                footer = child.props.children;
                footerClass = child.props.className;
                break;
        }
    }
    react_1.Children.toArray(children).forEach((child) => {
        if ((0, react_1.isValidElement)(child)) {
            handleChild(child);
        }
    });
    const cardContent = (react_1.default.createElement(react_1.Fragment, null,
        (header || image) && (react_1.default.createElement(BackgroundImage_1.default, Object.assign({ className: b('header', headerClass) }, (typeof image === 'string' ? { src: image } : image), { qa: qaAttributes.header }),
            react_1.default.createElement("div", { className: b('header-content') }, header))),
        react_1.default.createElement("div", { className: b('body', bodyClassName), "data-qa": qaAttributes.body },
            react_1.default.createElement("div", { className: b('content', contentClassName), "data-qa": qaAttributes.content }, content),
            footer && (react_1.default.createElement("div", { className: b('footer', footerClass), "data-qa": qaAttributes.footer }, footer)))));
    const fullClassName = b({ border }, className);
    const onClick = () => {
        handleAnalytics(analyticsEvents);
    };
    return url ? (react_1.default.createElement(RouterLink_1.default, { href: url },
        react_1.default.createElement(uikit_1.Link, { href: url, target: target, rel: target === '_blank' ? 'noopener noreferrer' : undefined, className: fullClassName, onClick: onClick, title: urlTitle, extraProps: Object.assign({ draggable: false, onDragStart: (e) => e.preventDefault() }, extraProps), qa: qa }, cardContent))) : (react_1.default.createElement("div", Object.assign({ className: fullClassName, "data-qa": qa }, extraProps), cardContent));
};
exports.Layout = Layout;
exports.Layout.Header = Header;
exports.Layout.Content = Content;
exports.Layout.Footer = Footer;
exports.default = exports.Layout;
