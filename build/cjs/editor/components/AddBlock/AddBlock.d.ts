import { PropsWithChildren } from 'react';
import { Block, ClassNameProps } from '../../../models';
export interface AddBlockProps extends ClassNameProps {
    onAdd: (data: Block) => void;
}
declare const AddBlock: ({ onAdd, className }: PropsWithChildren<AddBlockProps>) => JSX.Element;
export default AddBlock;
