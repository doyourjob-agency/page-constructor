import React, { useCallback, useContext, useMemo, useRef, useState } from 'react';
import { BackgroundImage, Title } from '../../components';
import InnerForm from '../../components/InnerForm/InnerForm';
import { FormListContext } from '../../context/formListContext';
import { MobileContext } from '../../context/mobileContext';
import { useTheme } from '../../context/theme';
import { Col, Grid, GridAlignItems, GridColumnSize, Row } from '../../grid';
import { FormBlockDataTypes, FormBlockDirection, isHubspotDataForm, isYandexDataForm, } from '../../models';
import { Content } from '../../sub-blocks';
import { block, getThemedValue } from '../../utils';
import './Form.css';
const b = block('form-block');
const colSizes = { [GridColumnSize.Lg]: 6, [GridColumnSize.All]: 12 };
const FormBlock = (props) => {
    var _a;
    const { formData, title, textContent, textFormContent, direction = FormBlockDirection.Center, background, image, backgroundColor, slug, } = props;
    const [contentLoaded, setContentLoaded] = useState(false);
    const isMobile = useContext(MobileContext);
    const theme = useTheme();
    const bg = useMemo(() => {
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
    const themedBackground = getThemedValue(bg, theme) || undefined;
    const withBackground = Boolean(themedBackground &&
        (themedBackground.src ||
            themedBackground.desktop ||
            ((_a = themedBackground.style) === null || _a === void 0 ? void 0 : _a.backgroundColor)));
    const onContentLoad = useCallback(() => {
        setContentLoaded(true);
    }, []);
    const refForm = useRef(null);
    const formList = useContext(FormListContext);
    const form = useMemo(() => formList.items.find((item) => item.slug === slug), [slug, formList.items]);
    const data = useMemo(() => {
        if (form) {
            return {
                hubspot: Object.assign(Object.assign({}, form), { onSubmit: () => { var _a; return (_a = refForm.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView(); } }),
            };
        }
        return formData;
    }, [form, formData]);
    const innerTitle = useMemo(() => (form === null || form === void 0 ? void 0 : form.title) || title || undefined, [form, title]);
    let formType;
    if (data) {
        if (isYandexDataForm(data)) {
            formType = FormBlockDataTypes.YANDEX;
        }
        else if (isHubspotDataForm(data)) {
            formType = FormBlockDataTypes.HUBSPOT;
        }
    }
    return (React.createElement("div", { className: b({
            'with-background': withBackground,
            'form-type': formType,
        }) },
        themedBackground && (React.createElement(BackgroundImage, Object.assign({}, themedBackground, { className: b('media'), imageClassName: b('image') }))),
        React.createElement(Grid, null,
            React.createElement(Row, { alignItems: direction === FormBlockDirection.Center
                    ? GridAlignItems.Center
                    : GridAlignItems.Start, className: b('row', {
                    direction,
                }) },
                React.createElement(Col, { sizes: colSizes, className: b('content-col') }, textContent && (React.createElement("div", { className: b('content-wrapper') },
                    React.createElement(Content, Object.assign({ theme: "default" }, textContent, { centered: direction === FormBlockDirection.Center, colSizes: { all: 12 }, className: b('content') }))))),
                React.createElement(Col, { sizes: colSizes, className: b('form-col') },
                    React.createElement("div", { className: b('form-wrapper'), ref: refForm },
                        React.createElement("div", { className: b('full-form', {
                                hidden: !contentLoaded,
                            }) },
                            innerTitle && (React.createElement(Title, { title: {
                                    text: innerTitle,
                                    textSize: 's',
                                }, className: b('title', { mobile: isMobile }), colSizes: { all: 12 } })),
                            React.createElement(Content, Object.assign({}, textFormContent, { theme: "default", centered: direction === FormBlockDirection.Center, colSizes: { all: 12 }, className: b('content') })),
                            data && (React.createElement(InnerForm, { className: b('form'), formData: data, onContentLoad: onContentLoad })))))))));
};
export default FormBlock;
