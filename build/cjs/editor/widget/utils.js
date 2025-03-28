"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHostStyles = void 0;
const getHostStyles = () => {
    return [...document.styleSheets]
        .map((styleSheet) => {
        try {
            return [...styleSheet.cssRules].map((rule) => rule.cssText).join('');
        }
        catch (e) {
            //eslint-disable-next-line no-console
            console.log(`Access to stylesheet  ${styleSheet.href} is denied. Ignoring...`);
            return '';
        }
    })
        .filter(Boolean)
        .join('\n');
};
exports.getHostStyles = getHostStyles;
