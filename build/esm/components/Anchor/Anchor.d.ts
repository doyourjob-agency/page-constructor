import { ClassNameProps, QAProps } from '../../models';
import './Anchor.css';
export declare const qaIdByDefault = "qa-anchor";
export interface AnchorProps extends ClassNameProps, QAProps {
    id: string;
}
declare const Anchor: ({ id, className, qa }: AnchorProps) => JSX.Element;
export default Anchor;
