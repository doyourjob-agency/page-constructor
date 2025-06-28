import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react';

import {Modal} from '@gravity-ui/uikit';

import {FormListContext} from '../../context/formListContext';
import {FormsContext} from '../../context/formsContext';
import {useTheme} from '../../context/theme';
import {FormWallBlockProps} from '../../models';
import {HubspotForm} from '../../sub-blocks';
import {block, getThemedValue} from '../../utils';

import './FormWallBlock.scss';

export const FORM_WALL_BLOCK_STORAGE_KEY = 'FORM_WALL_BLOCK_STORAGE_KEY';

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

    const localStorageKey = useMemo(
        () => String(slug || formData?.hubspot?.formId || window.location.pathname),
        [slug, formData],
    );

    const handleSubmit = useCallback(() => {
        setShowForm(false);
        try {
            const storageData = JSON.parse(
                window.localStorage.getItem(FORM_WALL_BLOCK_STORAGE_KEY) || '{}',
            );
            storageData[localStorageKey] = true;
            window.localStorage.setItem(FORM_WALL_BLOCK_STORAGE_KEY, JSON.stringify(storageData));
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
        }
    }, [localStorageKey]);

    const data = useMemo(() => {
        return form ? form : formData.hubspot;
    }, [form, formData.hubspot]);

    useEffect(() => {
        try {
            const storageData = JSON.parse(
                window.localStorage.getItem(FORM_WALL_BLOCK_STORAGE_KEY) || '{}',
            );
            if (!storageData[localStorageKey]) {
                setShowForm(true);
            }
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const themedFormData = getThemedValue(data, theme);

    return (
        <Modal
            open={showForm}
            className={b()}
            disableEscapeKeyDown={true}
            disableOutsideClick={true}
        >
            <div className={b('container')}>
                <HubspotForm
                    createDOMElement={true}
                    {...formsConfig.hubspot}
                    {...themedFormData}
                    onSubmit={handleSubmit}
                />
            </div>
        </Modal>
    );
};

export default FormWallBlock;
