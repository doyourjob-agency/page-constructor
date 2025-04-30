import { QAProps, TitleItemProps, TitleTextSize } from '../../models';
export declare function getArrowSize(size: TitleTextSize, isMobile: boolean): 16 | 20 | 24 | 13 | 22 | 26 | 38;
export interface TitleItemFullProps extends TitleItemProps, QAProps {
    className?: string;
    onClick?: () => void;
    resetMargin?: boolean;
}
declare const TitleItem: (props: TitleItemFullProps) => JSX.Element;
export default TitleItem;
