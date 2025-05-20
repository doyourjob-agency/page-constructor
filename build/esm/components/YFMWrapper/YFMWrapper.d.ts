import { ClassNameProps, Modifiers } from '../../models';
import { QAProps } from '../../models/common';
export interface YFMWrapperProps extends ClassNameProps, QAProps {
    content: string;
    modifiers?: Modifiers;
    itemProp?: string;
    id?: string;
}
declare const YFMWrapper: ({ content, modifiers, className, itemProp, id, qa }: YFMWrapperProps) => JSX.Element;
export default YFMWrapper;
