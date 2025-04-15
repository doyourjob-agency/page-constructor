"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const __1 = require("..");
const FormsContext_1 = require("../../context/formsContext/FormsContext");
const theme_1 = require("../../context/theme");
const models_1 = require("../../models");
const sub_blocks_1 = require("../../sub-blocks");
const utils_1 = require("../../utils");
const InnerForm = (props) => {
    const { formData, onContentLoad, className } = props;
    const formsConfig = (0, react_1.useContext)(FormsContext_1.FormsContext);
    const theme = (0, theme_1.useTheme)();
    (0, react_1.useEffect)(() => {
        if ((0, models_1.isHubspotDataForm)(formData)) {
            onContentLoad();
        }
    }, [onContentLoad, formData]);
    if ((0, models_1.isYandexDataForm)(formData)) {
        const _a = (0, utils_1.getThemedValue)(formData.yandex, theme), { onLoad } = _a, rest = tslib_1.__rest(_a, ["onLoad"]);
        return (react_1.default.createElement("div", { className: className },
            react_1.default.createElement(__1.YandexForm, Object.assign({}, formsConfig.yandex, rest, { onLoad: () => {
                    onContentLoad();
                    onLoad === null || onLoad === void 0 ? void 0 : onLoad();
                } }))));
    }
    if ((0, models_1.isHubspotDataForm)(formData)) {
        const themedFormData = (0, utils_1.getThemedValue)(formData.hubspot, theme);
        return (react_1.default.createElement(sub_blocks_1.HubspotForm, Object.assign({ createDOMElement: true }, formsConfig.hubspot, themedFormData)));
    }
    return null;
};
exports.default = InnerForm;
