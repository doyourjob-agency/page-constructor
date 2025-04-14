import { ConstructorBlock, PageContent } from '../../../models';
import { EditorBlockId } from './reducer';
export declare const changeBlocksOrder: (array: ConstructorBlock[], oldIndex: number, newIndex: number) => ConstructorBlock[];
export declare const duplicateBlock: (array: ConstructorBlock[], index: number) => ConstructorBlock[];
export declare const getNewBlockIndex: (id: EditorBlockId, orderedBlocksCount: number) => number;
export declare const addBlock: (array: ConstructorBlock[], block: ConstructorBlock, index: number) => ConstructorBlock[];
export declare const addEditorProps: (content: PageContent) => {
    animated: boolean;
    blocks: ConstructorBlock[];
    menu?: import("../../../models").Menu | undefined;
    background?: import("../../../models").ThemedMediaProps | undefined;
};
export declare const getErrorBoundaryState: (prevState: number) => number;
