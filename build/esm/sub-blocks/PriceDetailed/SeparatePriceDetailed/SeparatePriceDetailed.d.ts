/// <reference types="react" />
import { CardBorder, PriceDescriptionProps, PriceDetailsListProps, PriceDetailsSettingsProps, PriceItemProps } from '../../../models';
import './SeparatePriceDetailed.css';
interface SeparatePriceDetailedProps {
    items: PriceItemProps[];
    getDescriptionComponent: (priceDescription: PriceDescriptionProps) => JSX.Element;
    getDetailsComponent: (priceDetails?: PriceDetailsSettingsProps[] | PriceDetailsListProps[]) => JSX.Element;
    border?: CardBorder;
}
declare const SeparatePriceDetailed: (props: SeparatePriceDetailedProps) => JSX.Element;
export default SeparatePriceDetailed;
