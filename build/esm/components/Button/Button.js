import { __rest } from "tslib";
import React, { useCallback, useContext } from 'react';
import { StoreBadge } from '@gravity-ui/components';
import { Button as CommonButton, Icon, Platform } from '@gravity-ui/uikit';
import { LocaleContext } from '../../context/localeContext/localeContext';
import { useAnalytics } from '../../hooks';
import { Github } from '../../icons';
import { DefaultEventNames } from '../../models';
import { block, setUrlTld } from '../../utils';
import { i18n } from './i18n';
import { ICON_QA, toCommonSize, toCommonView } from './utils';
import './Button.css';
const b = block('button-block');
const Button = (props) => {
    const { tld } = useContext(LocaleContext);
    const { className, analyticsEvents, size = 'l', theme = 'normal', url, urlTitle, img, onClick: onClickOrigin, text, width } = props, rest = __rest(props, ["className", "analyticsEvents", "size", "theme", "url", "urlTitle", "img", "onClick", "text", "width"]);
    const defaultImgPosition = 'left';
    const handleAnalytics = useAnalytics(DefaultEventNames.Button, url);
    const onClick = useCallback((e) => {
        handleAnalytics(analyticsEvents);
        if (onClickOrigin) {
            onClickOrigin(e);
        }
    }, [handleAnalytics, analyticsEvents, onClickOrigin]);
    const buttonModifiers = { size, theme, width };
    const buttonImg = img instanceof Object
        ? { url: img.url, position: img.position || defaultImgPosition, alt: img.alt }
        : { url: img, position: defaultImgPosition };
    const buttonClass = img
        ? b(Object.assign({ position: buttonImg.position }, buttonModifiers), className)
        : b(Object.assign({}, buttonModifiers), className);
    const buttonProps = Object.assign(Object.assign({}, rest), { onClick });
    if (theme === 'app-store' || theme === 'google-play') {
        const platform = theme === 'app-store' ? Platform.IOS : Platform.ANDROID;
        return React.createElement(StoreBadge, { className: buttonClass, platform: platform, href: url });
    }
    let icon;
    let image = img && (React.createElement("img", { className: b('image'), src: buttonImg.url, alt: buttonImg.alt || i18n('image-alt') }));
    if (theme === 'github') {
        icon = React.createElement(Icon, { className: b('icon'), data: Github, size: 24, qa: ICON_QA });
        image = undefined;
    }
    const buttonTheme = theme === 'scale' ? 'accent' : theme;
    return (React.createElement(CommonButton, Object.assign({ className: buttonClass, view: toCommonView(buttonTheme), size: toCommonSize(size), href: url ? setUrlTld(url, tld) : undefined, title: urlTitle, width: width }, buttonProps),
        icon && buttonImg.position === 'left' ? icon : null,
        React.createElement("span", { className: b('content') },
            image && buttonImg.position === 'left' ? image : null,
            React.createElement("span", { className: b('text') }, text),
            image && buttonImg.position === 'right' ? image : null),
        icon && buttonImg.position === 'right' ? icon : null));
};
export default Button;
