import React from 'react';
import AnimateBlock from '../../components/AnimateBlock/AnimateBlock';
import BalancedMasonry from '../../components/BalancedMasonry/BalancedMasonry';
import FullWidthBackground from '../../components/FullWidthBackground/FullWidthBackground';
import Media from '../../components/Media/Media';
import Title from '../../components/Title/Title';
import YFMWrapper from '../../components/YFMWrapper/YFMWrapper';
import { BREAKPOINTS } from '../../constants';
import { useTheme } from '../../context/theme';
import { block, getThemedValue } from '../../utils';
import { mergeVideoMicrodata } from '../../utils/microdata';
import './PromoFeaturesBlock.css';
const b = block('PromoFeaturesBlock');
const breakpointColumns = {
    [BREAKPOINTS.lg]: 3,
    [BREAKPOINTS.md]: 2,
    [BREAKPOINTS.sm]: 1,
};
const PromoFeaturesBlock = (props) => {
    const { items, title, description, theme, animated = true } = props;
    const backgroundTheme = theme || 'default';
    const globalTheme = useTheme();
    return (React.createElement(AnimateBlock, { className: b({ [backgroundTheme]: true }), animate: animated },
        React.createElement(FullWidthBackground, { className: b('background', { [backgroundTheme]: true }) }),
        React.createElement(Title, { title: title, subtitle: description, className: b('header') }),
        React.createElement(BalancedMasonry, { breakpointCols: breakpointColumns, className: b('card-container'), columnClassName: b('card-container-column') }, items.map(({ title: cardTitle, text, media, theme: cardTheme }, index) => {
            const blockModifier = backgroundTheme === 'default' ? 'default' : 'light';
            const themeMod = cardTheme || blockModifier || '';
            const themedMedia = getThemedValue(media, globalTheme);
            const allProps = mergeVideoMicrodata(themedMedia, {
                name: cardTitle,
                description: text,
            });
            return (React.createElement("div", { key: index, className: b('card', {
                    'no-media': !media,
                    [themeMod]: Boolean(themeMod),
                }) },
                React.createElement("div", { className: b('card-info') },
                    React.createElement("h3", { className: b('card-title') }, cardTitle),
                    React.createElement("div", { className: b('card-text') },
                        React.createElement(YFMWrapper, { content: text, modifiers: { constructor: true } }))),
                media && React.createElement(Media, Object.assign({ className: b('card-media') }, allProps))));
        }))));
};
export default PromoFeaturesBlock;
