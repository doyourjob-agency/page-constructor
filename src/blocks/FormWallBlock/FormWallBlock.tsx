import React, {useContext, useEffect, useMemo, useState} from 'react';

import {Modal} from '@gravity-ui/uikit';

import {FormListContext} from '../../context/formListContext';
import {FormsContext} from '../../context/formsContext';
import {useTheme} from '../../context/theme';
import {FormWallBlockProps} from '../../models';
import {HubspotForm} from '../../sub-blocks';
import {block, getThemedValue} from '../../utils';

import './FormWallBlock.scss';

export const FORM_SHOW_FLAG = 'FORM_SHOW_FLAG';

const b = block('form-wall-block');

const FormWallBlock = (props: FormWallBlockProps) => {
    const [showForm, setShowForm] = useState(false);
    const {formData, slug} = props;
    const formList = useContext(FormListContext);
    const formsConfig = useContext(FormsContext);
    const form = useMemo(
        () => formList.items.find((item) => item.slug === slug),
        [slug, formList.items],
    );
    const theme = useTheme();

    function onSubmit() {
        setShowForm(false);
        window.localStorage.setItem(FORM_SHOW_FLAG, 'true');
    }

    const data = useMemo(() => {
        if (form) {
            return {
                ...form,
                onSubmit: onSubmit,
            };
        }
        return formData.hubspot;
    }, [form, formData]);

    useEffect(() => {
        if (!window.localStorage.getItem(FORM_SHOW_FLAG)) {
            setShowForm(true);
        }
    }, []);

    const themedFormData = getThemedValue(data, theme);

    return (
        <Modal open={showForm}>
            <div
                className={b()}
                style={{
                    display: showForm ? 'flex' : 'none',
                }}
            >
                <div className={b('form-container')}>
                    <HubspotForm
                        createDOMElement={true}
                        {...formsConfig.hubspot}
                        {...themedFormData}
                        onSubmit={onSubmit}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default FormWallBlock;
