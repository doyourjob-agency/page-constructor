import React from 'react';
import { PageContent } from '../../../models';
import { CodeEditorMessageProps } from '../../utils/validation';
import './CodeEditor.css';
interface CodeEditorProps {
    code: string;
    fullscreenModeOn: boolean;
    validator: (code: string) => CodeEditorMessageProps;
    onFullscreenModeOnUpdate: (fullscreenModeOn: boolean) => void;
    onChange: (content: PageContent) => void;
    message?: CodeEditorMessageProps;
}
export declare const CodeEditor: React.MemoExoticComponent<({ onChange, validator, fullscreenModeOn, onFullscreenModeOnUpdate, code }: CodeEditorProps) => JSX.Element>;
export {};
