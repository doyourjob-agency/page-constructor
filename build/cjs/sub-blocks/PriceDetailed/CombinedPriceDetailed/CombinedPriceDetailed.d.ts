/// <reference types="react" />
import { AnalyticsEventsBase, CardBorder, PriceDescriptionProps, PriceDetailsListProps, PriceDetailsSettingsProps, PriceItemProps } from '../../../models';
interface CombinedPriceDetailedProps extends AnalyticsEventsBase {
    items: PriceItemProps[];
    numberGroupItems: number;
    useMixedView?: boolean;
    getDescriptionComponent: (priceDescription: PriceDescriptionProps) => JSX.Element;
    getDetailsComponent: (priceDetails?: PriceDetailsSettingsProps[] | PriceDetailsListProps[]) => JSX.Element;
    border?: CardBorder;
}
declare const CombinedPriceDetailed: (props: CombinedPriceDetailedProps) => JSX.Element;
export default CombinedPriceDetailed;
