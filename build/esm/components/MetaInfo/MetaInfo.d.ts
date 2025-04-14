import { ClassNameProps } from '../../models';
import './MetaInfo.css';
export interface MetaInfpoProps extends ClassNameProps {
    items: string[];
}
declare const MetaInfo: ({ items, className }: MetaInfpoProps) => JSX.Element;
export default MetaInfo;
