import { PageContent } from '../../../../models';
type UseCodeProps = {
    content: PageContent;
    codeFullscreeModeOn: boolean;
    isCodeEditMode: boolean;
};
/**
 * Transorms PageConstructor content in JSON to YAML on code editor mode switching
 *
 * @param {Object} props - props parent from form
 * @returns {string} - updated code
 */
export declare function useCode({ content, codeFullscreeModeOn, isCodeEditMode }: UseCodeProps): string;
export {};
