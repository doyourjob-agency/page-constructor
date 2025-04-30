import { PriceDescriptionColor, PriceDescriptionProps, PriceLabelColor, TextSize } from '../../../models';
import './PriceDescription.css';
interface PriceDescriptionExtendProps extends PriceDescriptionProps {
    titleSize?: TextSize;
    descriptionSize?: TextSize;
    colorTitle?: PriceDescriptionColor;
    labelsDefaultText?: Record<PriceLabelColor, string>;
    className?: string;
}
declare const PriceDescription: (props: PriceDescriptionExtendProps) => JSX.Element;
export default PriceDescription;
