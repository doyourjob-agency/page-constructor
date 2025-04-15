import { ContentListProps } from '../../models';
import { QAProps } from '../../models/common';
import './ContentList.css';
declare const ContentList: ({ list, size, qa, theme }: ContentListProps & QAProps) => JSX.Element;
export default ContentList;
