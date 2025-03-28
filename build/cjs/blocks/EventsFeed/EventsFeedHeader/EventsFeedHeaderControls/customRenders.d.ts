import { SelectOption, SelectProps } from '@gravity-ui/uikit';
import { EventsFeedHeaderSwitcherProps } from '../EventsFeedHeaderSwitcher/EventsFeedHeaderSwitcher';
type RenderSwitcherType = ({ initial, list, defaultLabel, }: {
    initial: EventsFeedHeaderSwitcherProps['initial'];
    list: EventsFeedHeaderSwitcherProps['list'];
    defaultLabel: string;
}) => SelectProps['renderControl'];
export declare const renderSwitcher: RenderSwitcherType;
export declare const renderFilter: SelectProps['renderFilter'];
export declare const renderOption: (option: SelectOption) => JSX.Element;
export {};
