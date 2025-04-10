import { HeaderTag } from '../../../models';
interface HeaderTagsProps {
    theme?: 'light' | 'dark';
    tags?: HeaderTag[];
    className?: string;
}
export declare const HeaderTags: ({ theme, tags, className }: HeaderTagsProps) => JSX.Element | null;
export default HeaderTags;
