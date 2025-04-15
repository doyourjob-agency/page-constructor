import React from 'react';
import { JSONSchema4 } from 'json-schema';
import { PageContent } from '../../../models';
import './Form.css';
export interface FormProps {
    content: PageContent;
    schema: JSONSchema4;
    activeBlockIndex: number;
    onChange: (content: PageContent) => void;
    onSelect: (index: number) => void;
}
export declare const Form: React.MemoExoticComponent<({ content, onChange, activeBlockIndex, onSelect, schema }: FormProps) => JSX.Element>;
