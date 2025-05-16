"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const debounce_1 = tslib_1.__importDefault(require("lodash/debounce"));
const localeContext_1 = require("../../../context/localeContext/localeContext");
const mapsContext_1 = require("../../../context/mapsContext/mapsContext");
const mobileContext_1 = require("../../../context/mobileContext");
const utils_1 = require("../../../utils");
const ErrorWrapper_1 = tslib_1.__importDefault(require("../../ErrorWrapper/ErrorWrapper"));
const helpers_1 = require("../helpers");
const YMap_1 = require("./YMap");
const YandexMapApiLoader_1 = require("./YandexMapApiLoader");
const i18n_1 = require("./i18n");
const b = (0, utils_1.block)('map');
const DEFAULT_CONTAINER_ID = 'ymap';
const DEFAULT_ZOOM = 9;
// Center - is a required parameter for creating a new map
// We use this init center to create a map
// The real center of the map will be calculated later, using the coordinates of the markers
const INITIAL_CENTER = [0, 0];
const YandexMap = (props) => {
    const { markers, zoom, id, className } = props;
    const { apiKey, scriptSrc, nonce } = (0, react_1.useContext)(mapsContext_1.MapsContext);
    const isMobile = (0, react_1.useContext)(mobileContext_1.MobileContext);
    const { lang = 'ru' } = (0, react_1.useContext)(localeContext_1.LocaleContext);
    const containerId = `${DEFAULT_CONTAINER_ID}-${id}`;
    const [ymap, setYmaps] = (0, react_1.useState)(null);
    const [height, setHeight] = (0, react_1.useState)(undefined);
    const ref = (0, react_1.useRef)(null);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [ready, setReady] = (0, react_1.useState)(false);
    const [attemptsIndex, setAttemptsIndex] = (0, react_1.useState)(0);
    const onTryAgain = (0, react_1.useCallback)(() => {
        setAttemptsIndex(attemptsIndex + 1);
    }, [attemptsIndex]);
    (0, react_1.useEffect)(() => {
        (async function () {
            var _a;
            setLoading(true);
            await YandexMapApiLoader_1.YMapsApiLoader.loadApi(apiKey, scriptSrc, lang, nonce);
            (_a = window.ymaps) === null || _a === void 0 ? void 0 : _a.ready(() => {
                setYmaps(new YMap_1.YMap(new window.ymaps.Map(containerId, {
                    center: INITIAL_CENTER,
                    zoom: zoom || DEFAULT_ZOOM,
                }, { autoFitToViewport: 'always' }), ref.current));
            });
            setLoading(false);
        })();
    }, [apiKey, lang, scriptSrc, containerId, zoom, nonce, attemptsIndex, setLoading]);
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
    }, [markers, ymap, setYmaps, isMobile]);
    (0, react_1.useEffect)(() => {
        if (ymap) {
            // show with computed center and placemarks
            const showPlacemarks = async () => {
                await ymap.showPlacemarks({ markers, zoom });
                setReady(true);
            };
            showPlacemarks();
        }
    });
    if (!markers)
        return null;
    return (react_1.default.createElement(ErrorWrapper_1.default, { isError: YandexMapApiLoader_1.YMapsApiLoader.status === YandexMapApiLoader_1.MapApiStatus.Error, text: (0, i18n_1.i18n)('map-load-error'), buttonText: (0, i18n_1.i18n)('map-try-again'), handler: onTryAgain, className: b('wrapper') },
        react_1.default.createElement("div", { className: b('wrapper') },
            react_1.default.createElement("div", { id: containerId, className: b({ hidden: !ready }, className), ref: ref, style: { height } }),
            loading ? react_1.default.createElement(uikit_1.Spin, { size: "xl", className: b('spinner') }) : null)));
};
exports.default = YandexMap;
