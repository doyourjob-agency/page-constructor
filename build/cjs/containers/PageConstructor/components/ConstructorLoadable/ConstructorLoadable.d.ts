import { LoadableConfigItem } from '../../../../models';
import { LoadableComponentsProps } from '../../../Loadable/Loadable';
interface ConstructorLoadableProps extends Omit<LoadableComponentsProps, 'Component' | 'ChildComponent' | 'fetch'> {
    config: LoadableConfigItem;
}
export declare const ConstructorLoadable: (props: ConstructorLoadableProps) => JSX.Element;
export {};
