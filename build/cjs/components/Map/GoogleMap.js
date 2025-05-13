"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const debounce_1 = tslib_1.__importDefault(require("lodash/debounce"));
const localeContext_1 = require("../../context/localeContext/localeContext");
const mapsContext_1 = require("../../context/mapsContext/mapsContext");
const mobileContext_1 = require("../../context/mobileContext");
const utils_1 = require("../../utils");
const helpers_1 = require("./helpers");
const b = (0, utils_1.block)('map');
function getScriptSrc(params) {
    const { apiKey, scriptSrc, address, lang, zoom } = params;
    return `${scriptSrc}?key=${apiKey}&language=${lang}${zoom ? '&zoom=' + zoom : ''}&q=${encodeURI(address)}`;
}
const GoogleMap = (props) => {
    const { address, zoom, className } = props;
    const { apiKey, scriptSrc } = (0, react_1.useContext)(mapsContext_1.MapsContext);
    const { lang = uikit_1.Lang.Ru } = (0, react_1.useContext)(localeContext_1.LocaleContext);
    const isMobile = (0, react_1.useContext)(mobileContext_1.MobileContext);
    const [height, setHeight] = (0, react_1.useState)(undefined);
    const ref = (0, react_1.useRef)(null);
    const src = (0, react_1.useMemo)(() => getScriptSrc({ apiKey, scriptSrc, address, lang, zoom }), [apiKey, scriptSrc, address, lang, zoom]);
    (0, react_1.useEffect)(() => {
        const updateSize = (0, debounce_1.default)(() => {
            if (ref.current) {
                setHeight(Math.round((0, helpers_1.getMapHeight)(ref.current.offsetWidth, isMobile)));
            }
        }, 100);
        updateSize();
        window.addEventListener('resize', updateSize, { passive: true });
        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, [isMobile]);
    if (!apiKey || !address) {
        return null;
    }
    return (react_1.default.createElement("iframe", { className: b(null, className), ref: ref, style: {
            height,
        }, title: "Google Map", loading: "lazy", allowFullScreen: true, referrerPolicy: "no-referrer-when-downgrade", src: src }));
};
exports.default = GoogleMap;
