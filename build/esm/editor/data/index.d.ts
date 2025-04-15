/// <reference types="react" />
import { Block, BlockType } from '../../models';
export type PreviewComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
export interface EdiorBlockData {
    template: Block;
    preview: PreviewComponent;
    meta: {
        title: string;
        description?: string;
    };
}
type EditorBlocksData = Partial<Record<BlockType, EdiorBlockData>>;
declare function getEditorBlocksData(): Promise<EditorBlocksData>;
export { EditorBlocksData, getEditorBlocksData };
