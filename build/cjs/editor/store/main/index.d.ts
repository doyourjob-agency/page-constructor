import { Block, BlockDecorationProps, PageContent } from '../../../models';
import { EditBlockProps, EditorProps } from '../../types';
export type EditorBlockId = number | string;
export declare function useMainState({ content: intialContent, custom }: Omit<EditorProps, 'children'>): {
    activeBlockIndex: number;
    content: PageContent;
    errorBoundaryState: number;
    injectEditBlockProps: ({ type, index: relativeIndex, children, ...rest }: BlockDecorationProps) => EditBlockProps;
    onAdd: (block: Block) => void;
    onSelect: (index: number) => void;
    onContentUpdate: (newContent: PageContent) => void;
};
