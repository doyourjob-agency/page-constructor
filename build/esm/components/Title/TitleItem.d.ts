import { QAProps, TitleItemProps, TitleTextSize } from '../../models';
import './TitleItem.css';
export declare function getArrowSize(size: TitleTextSize, isMobile: boolean): 16 | 13 | 22 | 24 | 26 | 38 | 20;
export interface TitleItemFullProps extends TitleItemProps, QAProps {
    className?: string;
    onClick?: () => void;
    resetMargin?: boolean;
}
declare const TitleItem: (props: TitleItemFullProps) => JSX.Element;
export default TitleItem;
