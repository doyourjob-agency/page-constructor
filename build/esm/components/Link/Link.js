import React, { Fragment, useContext } from 'react';
import { ChevronRight } from '@gravity-ui/icons';
import { Icon } from '@gravity-ui/uikit';
import { LocaleContext } from '../../context/localeContext';
import { LocationContext } from '../../context/locationContext';
import { useAnalytics } from '../../hooks';
import { DefaultEventNames } from '../../models';
import { block, getLinkProps, setUrlTld } from '../../utils';
import { getQaAttrubutes } from '../../utils/index';
import BackLink from '../BackLink/BackLink';
import FileLink from '../FileLink/FileLink';
import './Link.css';
const b = block('link-block');
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
    const qaAttributes = getQaAttrubutes(qa, ['normal']);
    const handleAnalytics = useAnalytics(DefaultEventNames.Link, url);
    const { hostname } = useContext(LocationContext);
    const { tld } = useContext(LocaleContext);
    const href = setUrlTld(props.url, tld);
    const defaultTextSize = theme === 'back' ? 'l' : 'm';
    const onClick = () => {
        handleAnalytics(analyticsEvents);
    };
    const getLinkByType = () => {
        switch (theme) {
            case 'back':
                return (React.createElement(BackLink, { title: children || text, url: href, onClick: onClick, tabIndex: tabIndex, extraProps: extraProps }));
            case 'file-link':
            case 'underline':
                return (React.createElement(FileLink, { text: children || text, href: href, type: "horizontal", textSize: textSize, onClick: onClick, tabIndex: tabIndex, extraProps: extraProps }));
            case 'normal': {
                const linkProps = getLinkProps(url, hostname, target);
                const content = children || text;
                return (React.createElement("a", Object.assign({ className: b('link', { theme: colorTheme, 'has-arrow': arrow }), href: href, onClick: onClick, tabIndex: tabIndex, title: urlTitle }, linkProps, { "data-qa": qaAttributes.normal }, extraProps), arrow ? (React.createElement(Fragment, null,
                    React.createElement("span", { className: b('content') }, content),
                    WORD_JOINER_SYM,
                    React.createElement(Icon, { className: b('arrow'), data: ChevronRight, size: getArrowSize(textSize) }))) : (content)));
            }
            default:
                return null;
        }
    };
    return (React.createElement("div", { className: b({ size: textSize || defaultTextSize }, className) }, getLinkByType()));
};
export default LinkBlock;
