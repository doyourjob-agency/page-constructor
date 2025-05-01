import React, { useCallback, useEffect, useState } from 'react';
import { Spin } from '@gravity-ui/uikit';
import ErrorWrapper from '../../components/ErrorWrapper/ErrorWrapper';
import { block as blockCn } from '../../utils/cn';
import { i18n } from './i18n';
import './Loadable.css';
const b = blockCn('loadable-block');
const initData = {
    loading: false,
    error: false,
};
const Loadable = (props) => {
    const { Component, ChildComponent, fetch, block, blockKey, serviceId, params } = props;
    const [dataState, setDataState] = useState(initData);
    const [refetchIndex, setRefetchIndex] = useState(0);
    const onTryAgain = useCallback(() => {
        setRefetchIndex(refetchIndex + 1);
    }, [refetchIndex]);
    useEffect(() => {
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
        return (React.createElement("div", { className: b('loader') },
            React.createElement(Spin, { size: "xl" })));
    }
    return (React.createElement(ErrorWrapper, { isError: error, text: i18n('loadable-load-error'), buttonText: i18n('loadable-try-again'), handler: onTryAgain },
        React.createElement(Component, Object.assign({}, block), data &&
            (Array.isArray(data) ? (data.map((componentData, index) => (React.createElement(ChildComponent, Object.assign({ key: componentData.id || index }, componentData))))) : (React.createElement(ChildComponent, Object.assign({}, data)))))));
};
export default Loadable;
