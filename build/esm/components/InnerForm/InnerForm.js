import { __rest } from "tslib";
import React, { useContext, useEffect } from 'react';
import { YandexForm } from '..';
import { FormsContext, } from '../../context/formsContext/FormsContext';
import { useTheme } from '../../context/theme';
import { isHubspotDataForm, isYandexDataForm } from '../../models';
import { HubspotForm } from '../../sub-blocks';
import { getThemedValue } from '../../utils';
const InnerForm = (props) => {
    const { formData, onContentLoad, className } = props;
    const formsConfig = useContext(FormsContext);
    const theme = useTheme();
    useEffect(() => {
        if (isHubspotDataForm(formData)) {
            onContentLoad();
        }
    }, [onContentLoad, formData]);
    if (isYandexDataForm(formData)) {
        const _a = getThemedValue(formData.yandex, theme), { onLoad } = _a, rest = __rest(_a, ["onLoad"]);
        return (React.createElement("div", { className: className },
            React.createElement(YandexForm, Object.assign({}, formsConfig.yandex, rest, { onLoad: () => {
                    onContentLoad();
                    onLoad === null || onLoad === void 0 ? void 0 : onLoad();
                } }))));
    }
    if (isHubspotDataForm(formData)) {
        const themedFormData = getThemedValue(formData.hubspot, theme);
        return (React.createElement(HubspotForm, Object.assign({ createDOMElement: true }, formsConfig.hubspot, themedFormData)));
    }
    return null;
};
export default InnerForm;
