import React, {useCallback, useContext, useMemo, useRef, useState} from 'react';

import {BackgroundImage, Title} from '../../components';
import InnerForm from '../../components/InnerForm/InnerForm';
import {FormListContext} from '../../context/formListContext';
import {MobileContext} from '../../context/mobileContext';
import {useTheme} from '../../context/theme';
import {Col, Grid, GridAlignItems, GridColumnSize, Row} from '../../grid';
import type {BackgroundImageProps, FormBlockProps} from '../../models';
import {
    FormBlockDataTypes,
    FormBlockDirection,
    isHubspotDataForm,
    isYandexDataForm,
} from '../../models';
import {Content} from '../../sub-blocks';
import {ThemeSupporting, block, getThemedValue} from '../../utils';

import './Form.scss';

const b = block('form-block');

const colSizes = {[GridColumnSize.Lg]: 6, [GridColumnSize.All]: 12};

const FormBlock: React.FC<FormBlockProps> = (props) => {
    const {
        formData,
        title,
        textContent,
        textFormContent,
        direction = FormBlockDirection.Center,
        fullWidth,
        fullWidthContent,
        background,
        image,
        backgroundColor,
        slug,
    } = props;
    const [contentLoaded, setContentLoaded] = useState(false);
    const isMobile = useContext(MobileContext);
    const theme = useTheme();

    const bg: ThemeSupporting<BackgroundImageProps> | undefined = useMemo(() => {
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

    const withBackground = Boolean(
        themedBackground &&
            (themedBackground.src ||
                themedBackground.desktop ||
                themedBackground.style?.backgroundColor),
    );

    const isFullWidthForm = direction === FormBlockDirection.Center && fullWidth;
    const isFullWidthContent = direction === FormBlockDirection.Center && fullWidthContent;

    const onContentLoad = useCallback(() => {
        setContentLoaded(true);
    }, []);

    const refForm = useRef<HTMLDivElement | null>(null);
    const formList = useContext(FormListContext);
    const form = useMemo(
        () => formList.items.find((item) => item.slug === slug),
        [slug, formList.items],
    );
    const data = useMemo(() => {
        if (form) {
            return {
                hubspot: {
                    ...form,
                    onSubmit: () => refForm.current?.scrollIntoView(),
                },
            };
        }
        return formData;
    }, [form, formData]);
    const innerTitle = useMemo(() => form?.title || title || undefined, [form, title]);

    let formType;

    if (data) {
        if (isYandexDataForm(data)) {
            formType = FormBlockDataTypes.YANDEX;
        } else if (isHubspotDataForm(data)) {
            formType = FormBlockDataTypes.HUBSPOT;
        }
    }

    return (
        <div
            className={b({
                'with-background': withBackground,
                'form-type': formType,
            })}
        >
            {themedBackground && (
                <BackgroundImage
                    {...themedBackground}
                    className={b('media')}
                    imageClassName={b('image')}
                />
            )}
            <Grid>
                <Row
                    alignItems={
                        direction === FormBlockDirection.Center
                            ? GridAlignItems.Center
                            : GridAlignItems.Start
                    }
                    className={b('row', {
                        direction,
                    })}
                >
                    <Col
                        sizes={isFullWidthContent ? {[GridColumnSize.All]: 12} : colSizes}
                        className={b('content-col')}
                    >
                        {textContent && (
                            <div className={b('content-wrapper')}>
                                <Content
                                    theme="default"
                                    {...textContent}
                                    centered={direction === FormBlockDirection.Center}
                                    colSizes={{all: 12}}
                                    className={b('content')}
                                />
                            </div>
                        )}
                    </Col>
                    <Col
                        sizes={isFullWidthForm ? {[GridColumnSize.All]: 12} : colSizes}
                        className={b('form-col')}
                    >
                        <div className={b('form-wrapper', {full: isFullWidthForm})} ref={refForm}>
                            <div
                                className={b('full-form', {
                                    hidden: !contentLoaded,
                                })}
                            >
                                {innerTitle && (
                                    <Title
                                        title={{
                                            text: innerTitle,
                                            textSize: 's',
                                        }}
                                        className={b('title', {
                                            mobile: isMobile,
                                            centered: direction === FormBlockDirection.Center,
                                        })}
                                        colSizes={{all: 12}}
                                    />
                                )}
                                <Content
                                    {...textFormContent}
                                    theme="default"
                                    centered={direction === FormBlockDirection.Center}
                                    colSizes={{all: 12}}
                                    className={b('content')}
                                />
                                {data && (
                                    <InnerForm
                                        className={b('form')}
                                        formData={data}
                                        onContentLoad={onContentLoad}
                                    />
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

export default FormBlock;
