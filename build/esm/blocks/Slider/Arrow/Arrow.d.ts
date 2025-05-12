import { ClassNameProps } from '../../../models';
import './Arrow.css';
export type ArrowType = 'left' | 'right';
export interface ArrowProps {
    type: ArrowType;
    handleClick?: (direction: ArrowType) => void;
    size?: number;
}
declare const Arrow: ({ type, handleClick, className, size }: ArrowProps & ClassNameProps) => JSX.Element;
export default Arrow;
