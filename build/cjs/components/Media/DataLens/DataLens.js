"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const localeContext_1 = require("../../../context/localeContext");
const utils_1 = require("../../../utils");
const i18n_1 = require("./i18n");
const utils_2 = require("./utils");
const b = (0, utils_1.block)('media-component-data-lens');
const DataLens = (props) => {
    const { dataLens } = props;
    const dataLensData = (0, utils_2.unifyDataLensToObject)(dataLens);
    const locale = (0, react_1.useContext)(localeContext_1.LocaleContext);
    return dataLens ? (react_1.default.createElement("div", { className: b('wrap') },
        react_1.default.createElement("iframe", { src: `https://datalens.yandex/${dataLensData.id}?_embedded=1&_theme=${dataLensData.theme}&_lang=${locale.lang}`, className: b('iframe'), loading: "lazy", title: (0, i18n_1.i18n)('iframe-title'), frameBorder: 0 }))) : null;
};
exports.default = DataLens;
