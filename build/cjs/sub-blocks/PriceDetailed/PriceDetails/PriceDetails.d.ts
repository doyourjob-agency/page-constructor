import { PriceDetailsProps, PriceDetailsType, PriceFoldableDetailsProps, TextSize } from '../../../models';
interface PriceDetailsExtendProps extends PriceDetailsProps {
    type: PriceDetailsType;
    titleSize?: TextSize;
    descriptionSize?: TextSize;
    foldable?: PriceFoldableDetailsProps;
    useMixedView?: boolean;
    className?: string;
}
declare const PriceDetails: (props: PriceDetailsExtendProps) => JSX.Element;
export default PriceDetails;
