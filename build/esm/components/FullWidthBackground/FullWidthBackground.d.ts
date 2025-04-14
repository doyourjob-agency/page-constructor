import { CSSProperties, Component, PropsWithChildren } from 'react';
import { ClassNameProps } from '../../models';
import './FullWidthBackground.css';
export interface FullWidthBackgroundProps extends ClassNameProps {
    style?: CSSProperties;
    theme?: 'default' | 'rounded';
}
export default class FullWidthBackground extends Component<PropsWithChildren<FullWidthBackgroundProps>> {
    private ref;
    private setBg;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
