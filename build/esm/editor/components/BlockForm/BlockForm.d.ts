import React from 'react';
import { Block, ConstructorBlock } from '../../../models';
import { CustomSpec } from '../../dynamic-forms-custom/parser/types';
interface BlockFormProps {
    data: ConstructorBlock;
    spec: CustomSpec;
    onChange: (data: Block) => void;
    onSelect: () => void;
    active?: boolean;
}
export declare const BlockForm: React.MemoExoticComponent<({ data: { type, ...content }, onChange, onSelect, active, spec: specRaw }: BlockFormProps) => JSX.Element>;
export {};
