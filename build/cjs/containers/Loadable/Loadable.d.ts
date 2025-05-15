import { PropsWithChildren } from 'react';
import { ConstructorBlock, CustomItem, FetchLoadableData, LoadableData, LoadableProps } from '../../models';
export interface LoadableState {
    loading: boolean;
    error: boolean;
    data?: LoadableData;
}
export interface LoadableComponentsProps extends Omit<PropsWithChildren<LoadableProps>, 'source'> {
    Component: CustomItem;
    ChildComponent: CustomItem;
    block: ConstructorBlock;
    blockKey: string;
    fetch: FetchLoadableData;
}
declare const Loadable: (props: LoadableComponentsProps) => JSX.Element;
export default Loadable;
