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
    const qaAttributes = (0, react_1.useMemo)(() => (0, utils_1.getQaAttrubutes)(qa, 'header', 'footer', 'body', 'content'), [qa]);
    const { header, content, footer, image, headerClass, footerClass } = (0, react_1.useMemo)(() => {
        let _header, _content, _footer, _image, _headerClass, _footerClass;
        function handleChild(child) {
            switch (child.type) {
                case Header:
                    _header = child.props.children;
                    _image = child.props.image;
                    _headerClass = child.props.className;
                    break;
                case Content:
                    _content = child.props.children;
                    break;
                case Footer:
                    _footer = child.props.children;
                    _footerClass = child.props.className;
                    break;
            }
        }
        react_1.Children.toArray(children).forEach((child) => {
            if ((0, react_1.isValidElement)(child)) {
                handleChild(child);
            }
        });
        return {
            header: _header,
            content: _content,
            footer: _footer,
            image: _image,
            headerClass: _headerClass,
            footerClass: _footerClass,
        };
    }, [children]);
    const cardContent = (0, react_1.useMemo)(() => (react_1.default.createElement(react_1.Fragment, null,
        (header || image) && (react_1.default.createElement(BackgroundImage_1.default, Object.assign({ className: b('header', headerClass) }, (typeof image === 'string' ? { src: image } : image), { qa: qaAttributes.header }),
            react_1.default.createElement("div", { className: b('header-content') }, header))),
        react_1.default.createElement("div", { className: b('body', bodyClassName), "data-qa": qaAttributes.body },
            react_1.default.createElement("div", { className: b('content', contentClassName), "data-qa": qaAttributes.content }, content),
            footer && (react_1.default.createElement("div", { className: b('footer', footerClass), "data-qa": qaAttributes.footer }, footer))))), [
        header,
        content,
        image,
        headerClass,
        bodyClassName,
        contentClassName,
        footer,
        footerClass,
        qaAttributes,
    ]);
    const fullClassName = (0, react_1.useMemo)(() => b({ border }, className), [border, className]);
    const onClick = (0, react_1.useCallback)(() => {
        handleAnalytics(analyticsEvents);
    }, [handleAnalytics, analyticsEvents]);
    return url ? (react_1.default.createElement(RouterLink_1.default, { href: url },
        react_1.default.createElement(uikit_1.Link, { href: url, target: target, rel: target === '_blank' ? 'noopener noreferrer' : undefined, className: fullClassName, onClick: onClick, title: urlTitle, extraProps: Object.assign({ draggable: false, onDragStart: (e) => e.preventDefault() }, extraProps), qa: qa }, cardContent))) : (react_1.default.createElement("div", Object.assign({ className: fullClassName, "data-qa": qa }, extraProps), cardContent));
};
exports.Layout = Layout;
exports.Layout.Header = Header;
exports.Layout.Content = Content;
exports.Layout.Footer = Footer;
exports.default = exports.Layout;
