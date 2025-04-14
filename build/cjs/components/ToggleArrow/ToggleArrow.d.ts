export interface ToggleArrowProps {
    type?: 'horizontal' | 'vertical';
    iconType?: 'navigation' | 'default';
    open?: boolean;
    size?: number;
    thin?: boolean;
    slow?: boolean;
    className?: string;
}
declare const ToggleArrow: ({ type, iconType, open, size, thin, slow, className, }: ToggleArrowProps) => JSX.Element;
export default ToggleArrow;
