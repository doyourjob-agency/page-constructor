import { ClassNameProps, ImageProps, QAProps, SVGIcon } from '../../models';
import { ThemeSupporting } from '../../utils';
interface ListItemProps extends QAProps, ClassNameProps {
    icon: ThemeSupporting<ImageProps | SVGIcon>;
}
declare const ContentListItemIcon: ({ icon, className, qa }: ListItemProps) => JSX.Element;
export default ContentListItemIcon;
