"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesStickyMenu = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const utils_1 = require("../../../utils");
const i18n_1 = require("../i18n");
const b = (0, utils_1.block)('services-sticky-menu');
const ServicesStickyMenu = ({ items }) => {
    const [activeSlug, setActiveSlug] = (0, react_1.useState)(items[0].slug);
    (0, react_1.useEffect)(() => {
        // This effect tracks active element in the menu
        const scrollHandler = () => {
            var _a;
            // Taking offsets of all available anchors, while shifting them a bit to the top
            const menuItemPositions = items.map(({ slug }) => {
                var _a, _b, _c;
                return ({
                    slug: slug,
                    offset: ((_c = (_b = (_a = document.getElementById(slug !== null && slug !== void 0 ? slug : '')) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.top) !== null && _c !== void 0 ? _c : 0) - 150,
                });
            });
            // Inverting them and setting inappropriate (i.e. ones that we've scrolled over already) offsets to infinity
            const offsets = menuItemPositions.map(({ offset }) => (offset > 0 ? Infinity : -offset));
            // Aquiring minimal appropriate offset
            const minimalOffset = Math.min(...offsets);
            // And setting new active element appropriately
            setActiveSlug((_a = menuItemPositions[offsets.indexOf(minimalOffset)]) === null || _a === void 0 ? void 0 : _a.slug);
        };
        scrollHandler();
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [items]);
    return (react_1.default.createElement("div", { className: b() },
        react_1.default.createElement("h5", { className: b('title') }, (0, i18n_1.i18n)('menuTitle')),
        react_1.default.createElement("menu", { className: b('list') }, items.map(({ name, slug }) => (react_1.default.createElement("li", { key: slug, className: b('elem', { active: slug === activeSlug }) },
            react_1.default.createElement(uikit_1.Link, { className: b('link'), href: `#${slug}`, target: "_self" }, name)))))));
};
exports.ServicesStickyMenu = ServicesStickyMenu;
exports.default = exports.ServicesStickyMenu;
