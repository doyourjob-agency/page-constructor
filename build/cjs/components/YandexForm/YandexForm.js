"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YANDEX_FORM_SECTION = exports.YANDEX_FORM_ORIGIN = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const localeContext_1 = require("../../context/localeContext");
const mobileContext_1 = require("../../context/mobileContext");
const hooks_1 = require("../../hooks");
const common_1 = require("../../models/common");
const utils_1 = require("../../utils");
const constants_1 = require("../constants");
exports.YANDEX_FORM_ORIGIN = 'https://forms.yandex.ru';
exports.YANDEX_FORM_SECTION = 'surveys';
const CONTAINER_ID = 'pc-yandex-form-container';
const b = (0, utils_1.block)('yandex-form');
const YandexForm = (props) => {
    const { onLoad, id, params, className, theme, containerId = CONTAINER_ID, headerHeight = constants_1.HEADER_HEIGHT, onSubmit, analyticsEvents, customFormOrigin, customFormSection, } = props;
    const formContainerRef = (0, react_1.useRef)(null);
    const iframeRef = (0, react_1.useRef)();
    const yaFormOrigin = customFormOrigin || exports.YANDEX_FORM_ORIGIN;
    const yaFormSection = customFormSection || exports.YANDEX_FORM_SECTION;
    const handleAnalytics = (0, hooks_1.useAnalytics)(common_1.DefaultEventNames.YandexFormSubmit);
    const isMobile = (0, react_1.useContext)(mobileContext_1.MobileContext);
    const locale = (0, react_1.useContext)(localeContext_1.LocaleContext);
    const updateFormIframe = (0, react_1.useCallback)((container) => {
        const queryParams = new URLSearchParams(location.search);
        const url = location.origin + location.pathname;
        queryParams.set('url', url);
        queryParams.set('iframe', '1');
        if (locale === null || locale === void 0 ? void 0 : locale.lang) {
            queryParams.set('lang', locale.lang);
        }
        queryParams.set('theme', theme || 'cloud-www');
        if (isMobile) {
            queryParams.set('media-type', 'mobile');
        }
        if (params) {
            Object.keys(params).forEach((param) => {
                queryParams.set(param, params[param]);
            });
        }
        const src = `${yaFormOrigin}/${yaFormSection}/${id}/?${queryParams}`;
        if (iframeRef.current) {
            iframeRef.current.src = src;
        }
        else {
            iframeRef.current = document.createElement('iframe');
            iframeRef.current.src = src;
            iframeRef.current.id = containerId;
            iframeRef.current.name = `form${id}`;
            iframeRef.current.setAttribute('loading', 'lazy');
            iframeRef.current.frameBorder = '0';
            iframeRef.current.scrolling = 'no';
            iframeRef.current.width = '100%';
            container.appendChild(iframeRef.current);
        }
    }, [locale.lang, theme, isMobile, yaFormOrigin, yaFormSection, id, containerId, params]);
    const handleSubmit = (0, react_1.useCallback)(() => {
        if (formContainerRef && formContainerRef.current) {
            const { top } = formContainerRef.current.getBoundingClientRect();
            window.scrollBy(0, top - headerHeight);
        }
        handleAnalytics(analyticsEvents);
        if (onSubmit) {
            onSubmit();
        }
    }, [handleAnalytics, analyticsEvents, onSubmit, headerHeight]);
    const handleMessage = (0, react_1.useCallback)(({ origin, data }) => {
        if (origin !== yaFormOrigin) {
            return;
        }
        try {
            const parsed = JSON.parse(data);
            const height = parsed['iframe-height'];
            const { message, name, redirectUrl } = parsed;
            if (name !== `form${id}`) {
                return;
            }
            if (iframeRef.current && height && !message) {
                iframeRef.current.height = `${height}px`;
                onLoad === null || onLoad === void 0 ? void 0 : onLoad();
            }
            if (message === 'sent' || redirectUrl) {
                // event with redirectUrl is comming when form with redirect is used
                // otherwise, message: 'sent' is not comming on such sort of forms
                // to catch this event and handle analytics redirectUrl is added to condition
                handleSubmit();
            }
        }
        catch (error) {
            return;
        }
    }, [yaFormOrigin, id, onLoad, handleSubmit]);
    const addIframe = (0, react_1.useCallback)(() => {
        const container = formContainerRef.current;
        if (container) {
            updateFormIframe(container);
            window.addEventListener('message', handleMessage, { passive: true });
        }
    }, [updateFormIframe, handleMessage]);
    (0, react_1.useEffect)(() => {
        addIframe();
        // Crunch for mobile chrome in lite mode
        // https://support.google.com/chrome/answer/2392284?co=GENIE.Platform%3DAndroid&oco=1
        setTimeout(() => onLoad === null || onLoad === void 0 ? void 0 : onLoad(), 1000);
        return () => window.removeEventListener('message', handleMessage);
    }, [id, addIframe, handleMessage, onLoad]);
    return react_1.default.createElement("div", { ref: formContainerRef, className: b(null, className) });
};
exports.default = YandexForm;
