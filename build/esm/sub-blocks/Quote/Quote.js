import React, { useCallback } from 'react';
import { Author, Button, HTML, Image, YFMWrapper } from '../../components';
import { getMediaImage } from '../../components/Media/Image/utils';
import { useTheme } from '../../context/theme';
import { useAnalytics } from '../../hooks';
import { AuthorType, DefaultEventNames, QuoteType } from '../../models';
import { block, getThemedValue } from '../../utils';
import './Quote.css';
const b = block('quote');
const Quote = (props) => {
    const { theme: textTheme = 'light', color, image, border = 'shadow', text, yfmText, logo, author, url, urlTitle, buttonText, quoteType = QuoteType.Chevron, button, } = props;
    const theme = useTheme();
    const imageThemed = getThemedValue(image, theme);
    const imageData = getMediaImage(imageThemed);
    const handleAnalytics = useAnalytics(DefaultEventNames.QuoteButton, url);
    const handleButtonClick = useCallback(() => handleAnalytics(), [handleAnalytics]);
    const themedAuthor = author
        ? Object.assign(Object.assign({}, author), { avatar: getThemedValue(author.avatar, theme) })
        : author;
    const renderFooter = Boolean(author || url) && (React.createElement("div", { className: b('author-wrapper') },
        themedAuthor && (React.createElement(Author, { className: b('author', { theme: textTheme }), author: themedAuthor, type: AuthorType.Line, theme: textTheme })),
        url && buttonText && !button && (React.createElement(Button, { theme: "outlined", size: "xl", url: url, className: b('link-button', { theme: textTheme }), onClick: handleButtonClick, urlTitle: urlTitle, text: buttonText })),
        button && React.createElement(Button, Object.assign({ size: "xl" }, button))));
    const themedLogoProps = getThemedValue(logo, theme);
    const logoProps = getMediaImage(themedLogoProps);
    return (React.createElement("div", { className: b({ theme: textTheme, border }), style: color ? { backgroundColor: color } : {} },
        React.createElement("div", { key: text, className: b('content-wrapper') },
            React.createElement("div", null,
                React.createElement(Image, Object.assign({ className: b('logo') }, logoProps)),
                React.createElement("div", { className: b('content', { 'quote-type': quoteType }) },
                    text && (React.createElement("span", { className: b('text') },
                        React.createElement(HTML, null, text))),
                    yfmText && (React.createElement(YFMWrapper, { className: b('text'), content: yfmText, modifiers: { constructor: true } })))),
            renderFooter),
        React.createElement("div", { className: b('image-wrapper') },
            React.createElement(Image, Object.assign({}, imageData, { className: b('image') })))));
};
export default Quote;
