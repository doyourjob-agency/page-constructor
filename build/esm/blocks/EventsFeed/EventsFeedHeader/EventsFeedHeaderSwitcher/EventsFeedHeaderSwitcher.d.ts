import { SelectProps } from '@gravity-ui/uikit';
import { SelectItem } from '../EventsFeedHeaderControls/EventsFeedHeaderControls';
import './EventsFeedHeaderSwitcher.css';
type RenderControlParameters = Partial<Parameters<Required<SelectProps>['renderControl']>[0]>;
export type EventsFeedHeaderSwitcherProps = {
    initial: (string | number | null)[];
    defaultLabel: string;
    list: SelectItem[];
    controlRef: RenderControlParameters['ref'];
} & Omit<RenderControlParameters, 'ref'>;
export declare const EventsFeedHeaderSwitcher: ({ initial, defaultLabel, list, onClick, controlRef, onKeyDown, open, renderClear, popupId, activeIndex, }: EventsFeedHeaderSwitcherProps) => JSX.Element;
export default EventsFeedHeaderSwitcher;
