import { ClassNameProps, ContentBlockProps } from '../../models';
import { QAProps } from '../../models/common';
import './Content.css';
export type ContentProps = ContentBlockProps & ClassNameProps & QAProps;
declare const Content: (props: ContentProps) => JSX.Element;
export default Content;
