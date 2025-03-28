"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const components_1 = require("../../components");
const InnerForm_1 = tslib_1.__importDefault(require("../../components/InnerForm/InnerForm"));
const formListContext_1 = require("../../context/formListContext");
const mobileContext_1 = require("../../context/mobileContext");
const theme_1 = require("../../context/theme");
const grid_1 = require("../../grid");
const models_1 = require("../../models");
const sub_blocks_1 = require("../../sub-blocks");
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('form-block');
const colSizes = { [grid_1.GridColumnSize.Lg]: 6, [grid_1.GridColumnSize.All]: 12 };
const FormBlock = (props) => {
    var _a;
    const { formData, title, textContent, textFormContent, direction = models_1.FormBlockDirection.Center, background, image, backgroundColor, slug, } = props;
    const [contentLoaded, setContentLoaded] = (0, react_1.useState)(false);
    const isMobile = (0, react_1.useContext)(mobileContext_1.MobileContext);
    const theme = (0, theme_1.useTheme)();
    const bg = (0, react_1.useMemo)(() => {
        if (image || backgroundColor) {
            return {
                src: image,
                style: {
                    backgroundColor,
                },
            };
        }
        return background;
    }, [image, backgroundColor, background]);
    const themedBackground = (0, utils_1.getThemedValue)(bg, theme) || undefined;
    const withBackground = Boolean(themedBackground &&
        (themedBackground.src ||
            themedBackground.desktop ||
            ((_a = themedBackground.style) === null || _a === void 0 ? void 0 : _a.backgroundColor)));
    const onContentLoad = (0, react_1.useCallback)(() => {
        setContentLoaded(true);
    }, []);
    const refForm = (0, react_1.useRef)(null);
    const formList = (0, react_1.useContext)(formListContext_1.FormListContext);
    const form = (0, react_1.useMemo)(() => formList.items.find((item) => item.slug === slug), [slug, formList.items]);
    const data = (0, react_1.useMemo)(() => {
        if (form) {
            return {
                hubspot: Object.assign(Object.assign({}, form), { onSubmit: () => {
                        var _a, _b;
                        return (_b = (_a = refForm.current) === null || _a === void 0 ? void 0 : _a.querySelector('.pc-form-block__form-wrapper')) === null || _b === void 0 ? void 0 : _b.scrollIntoView();
                    } }),
            };
        }
        return formData;
    }, [form, formData]);
    const innerTitle = (0, react_1.useMemo)(() => (form === null || form === void 0 ? void 0 : form.title) || title || undefined, [form, title]);
    let formType;
    if (data) {
        if ((0, models_1.isYandexDataForm)(data)) {
            formType = models_1.FormBlockDataTypes.YANDEX;
        }
        else if ((0, models_1.isHubspotDataForm)(data)) {
            formType = models_1.FormBlockDataTypes.HUBSPOT;
        }
    }
    return (react_1.default.createElement("div", { className: b({
            'with-background': withBackground,
            'form-type': formType,
        }) },
        themedBackground && (react_1.default.createElement(components_1.BackgroundImage, Object.assign({}, themedBackground, { className: b('media'), imageClassName: b('image') }))),
        react_1.default.createElement(grid_1.Grid, null,
            react_1.default.createElement(grid_1.Row, { alignItems: direction === models_1.FormBlockDirection.Center
                    ? grid_1.GridAlignItems.Center
                    : grid_1.GridAlignItems.Start, className: b('row', {
                    direction,
                }) },
                react_1.default.createElement(grid_1.Col, { sizes: colSizes, className: b('content-col') }, textContent && (react_1.default.createElement("div", { className: b('content-wrapper') },
                    react_1.default.createElement(sub_blocks_1.Content, Object.assign({ theme: "default" }, textContent, { centered: direction === models_1.FormBlockDirection.Center, colSizes: { all: 12 }, className: b('content') }))))),
                react_1.default.createElement(grid_1.Col, { sizes: colSizes, className: b('form-col') },
                    react_1.default.createElement("div", { className: b('form-wrapper') },
                        react_1.default.createElement("div", { className: b('full-form', {
                                hidden: !contentLoaded,
                            }) },
                            innerTitle && (react_1.default.createElement(components_1.Title, { title: {
                                    text: innerTitle,
                                    textSize: 's',
                                }, className: b('title', { mobile: isMobile }), colSizes: { all: 12 } })),
                            react_1.default.createElement(sub_blocks_1.Content, Object.assign({}, textFormContent, { theme: "default", centered: direction === models_1.FormBlockDirection.Center, colSizes: { all: 12 }, className: b('content') })),
                            data && (react_1.default.createElement(InnerForm_1.default, { className: b('form'), formData: data, onContentLoad: onContentLoad })))))))));
};
exports.default = FormBlock;
