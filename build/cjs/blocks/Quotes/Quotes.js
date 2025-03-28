"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const theme_1 = require("../../context/theme");
const utils_1 = require("../../utils");
const Slider_1 = require("../Slider/Slider");
const QuotesItem_1 = tslib_1.__importDefault(require("./QuotesItem/QuotesItem"));
const b = (0, utils_1.block)('quotes-block');
const QuotesBlock = ({ theme: localTheme, items, background, backgroundColor, }) => {
    const divRef = (0, react_1.useRef)(null);
    const globalTheme = (0, theme_1.useTheme)();
    const theme = localTheme || globalTheme;
    (0, react_1.useEffect)(() => {
        if (!divRef.current)
            return () => { };
        const resizeObserver = new ResizeObserver(() => {
            var _a, _b, _c;
            (_a = divRef.current) === null || _a === void 0 ? void 0 : _a.style.removeProperty('--quotes-block-width');
            (_b = divRef.current) === null || _b === void 0 ? void 0 : _b.style.setProperty('--quotes-block-width', `${(_c = divRef.current) === null || _c === void 0 ? void 0 : _c.clientWidth}px`);
        });
        resizeObserver.observe(divRef.current);
        return () => {
            resizeObserver.disconnect();
        };
    }, []);
    const backgroundStyle = (0, react_1.useMemo)(() => {
        if (background) {
            return { backgroundImage: `url("${background}")` };
        }
        if (backgroundColor) {
            return { backgroundColor };
        }
        return undefined;
    }, [background, backgroundColor]);
    return (react_1.default.createElement("div", { ref: divRef, className: b({ theme }) },
        react_1.default.createElement(Slider_1.SliderBlock, { slidesToShow: 1, lazyLoad: "ondemand", adaptive: false }, items.map((item, index) => (react_1.default.createElement(QuotesItem_1.default, Object.assign({ key: index, theme: theme }, item))))),
        react_1.default.createElement("div", { className: b('bg'), style: backgroundStyle })));
};
exports.QuotesBlock = QuotesBlock;
exports.default = exports.QuotesBlock;
