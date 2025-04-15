import { ClassNameProps } from '../../models';
import './CircleProgress.css';
export interface CircleProgressProps extends ClassNameProps {
    elapsedTime: number;
    baseColor?: string;
    circleColor?: string;
    strokeWidth?: number;
    radius?: number;
}
declare const CircleProgress: (props: CircleProgressProps) => JSX.Element;
export default CircleProgress;
