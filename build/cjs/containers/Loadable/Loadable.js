"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const ErrorWrapper_1 = tslib_1.__importDefault(require("../../components/ErrorWrapper/ErrorWrapper"));
const cn_1 = require("../../utils/cn");
const i18n_1 = require("./i18n");
const b = (0, cn_1.block)('loadable-block');
const initData = {
    loading: false,
    error: false,
};
const Loadable = (props) => {
    const { Component, ChildComponent, fetch, block, blockKey, serviceId, params } = props;
    const [dataState, setDataState] = (0, react_1.useState)(initData);
    const [refetchIndex, setRefetchIndex] = (0, react_1.useState)(0);
    const onTryAgain = (0, react_1.useCallback)(() => {
        setRefetchIndex(refetchIndex + 1);
    }, [refetchIndex]);
    (0, react_1.useEffect)(() => {
        async function processData() {
            setDataState({ loading: true, error: false });
            let data, error;
            try {
                data = await fetch(Object.assign({ blockKey, serviceId }, (params !== null && params !== void 0 ? params : {})));
                error = false;
                setDataState({ data, loading: false, error });
            }
            catch (ex) {
                error = true;
                setDataState({ loading: false, error });
            }
        }
        processData();
    }, [refetchIndex, fetch, blockKey, serviceId, params]);
    const { error, loading, data } = dataState;
    if (loading) {
        return (react_1.default.createElement("div", { className: b('loader') },
            react_1.default.createElement(uikit_1.Spin, { size: "xl" })));
    }
    return (react_1.default.createElement(ErrorWrapper_1.default, { isError: error, text: (0, i18n_1.i18n)('loadable-load-error'), buttonText: (0, i18n_1.i18n)('loadable-try-again'), handler: onTryAgain },
        react_1.default.createElement(Component, Object.assign({}, block), data &&
            (Array.isArray(data) ? (data.map((componentData, index) => (react_1.default.createElement(ChildComponent, Object.assign({ key: componentData.id || index }, componentData))))) : (react_1.default.createElement(ChildComponent, Object.assign({}, data)))))));
};
exports.default = Loadable;
