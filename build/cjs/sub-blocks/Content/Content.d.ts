import { ClassNameProps, ContentBlockProps } from '../../models';
import { QAProps } from '../../models/common';
export type ContentProps = ContentBlockProps & ClassNameProps & QAProps;
declare const Content: (props: ContentProps) => JSX.Element;
export default Content;
