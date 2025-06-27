import React, {useContext, useEffect, useMemo, useRef, useState} from 'react';

import {InnerForm} from '../../components';
import {FormListContext} from '../../context/formListContext';
import {FormWallBlockProps} from '../../models';
import {block} from '../../utils';

import './FormWallBlock.scss';

const FORM_SHOW_FLAG = 'FORM_SHOW_FLAG';

const b = block('form-wall-block');

const FormWallBlock = (props: FormWallBlockProps) => {
    const [showForm, setShowForm] = useState(false);
    const refForm = useRef<HTMLDivElement | null>(null);
    const {formData, slug} = props;
    const formList = useContext(FormListContext);
    const form = useMemo(
        () => formList.items.find((item) => item.slug === slug),
        [slug, formList.items],
    );

    function onSubmit() {
        setShowForm(false);
        window.localStorage.setItem(FORM_SHOW_FLAG, 'true');
    }

    const data = useMemo(() => {
        if (form) {
            return {
                hubspot: {
                    ...form,
                    onSubmit: onSubmit,
                },
            };
        }
        return formData;
    }, [form, formData]);

    useEffect(() => {
        if (!window.localStorage.getItem(FORM_SHOW_FLAG)) setShowForm(true);
    }, []);

    return (
        <div
            ref={refForm}
            className={b()}
            style={{
                display: showForm ? 'flex' : 'none',
            }}
        >
            <div className={b('form-container')}>
                <InnerForm formData={data} />
            </div>
        </div>
    );
};

export default FormWallBlock;
