import { ConstructorBlock, PageContent, Theme } from '../../../models';
import { ViewModeItem } from '../../types';
export type EditorBlockId = number | string;
interface MainState {
    content: PageContent;
    activeBlockIndex: number;
    errorBoundaryState: number;
    viewMode: ViewModeItem;
    theme: Theme;
}
interface OrderBlockParams {
    oldIndex: number;
    newIndex: number;
}
interface AddBlockParams {
    block: ConstructorBlock;
    index: number;
}
export declare const SELECT_BLOCK = "SELECT_BLOCK";
export declare const DELETE_BLOCK = "DELETE_BLOCK";
export declare const COPY_BLOCK = "COPY_BLOCK";
export declare const ADD_BLOCK = "ADD_BLOCK";
export declare const SET_REGION = "SET_REGION";
export declare const ORDER_BLOCK = "ORDER_BLOCK";
export declare const UPDATE_CONTENT = "UPDATE_CONTENT";
interface SelectBlock {
    type: typeof SELECT_BLOCK;
    payload: number;
}
interface DeleteBlock {
    type: typeof DELETE_BLOCK;
    payload: number;
}
interface CopyBlock {
    type: typeof COPY_BLOCK;
    payload: number;
}
interface AddBlock {
    type: typeof ADD_BLOCK;
    payload: AddBlockParams;
}
interface OrderBlock {
    type: typeof ORDER_BLOCK;
    payload: OrderBlockParams;
}
interface UpdateContent {
    type: typeof UPDATE_CONTENT;
    payload: PageContent;
}
export type EditorAction = SelectBlock | DeleteBlock | CopyBlock | AddBlock | OrderBlock | UpdateContent;
export declare const reducer: (state: MainState, action: EditorAction) => MainState;
export {};
