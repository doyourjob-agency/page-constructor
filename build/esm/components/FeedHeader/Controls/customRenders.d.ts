import { SelectOption as PcSelectOption, SelectProps } from '@gravity-ui/uikit';
import { SwitcherProps } from '../Switcher/Switcher';
import './Controls.css';
type RenderSwitcherType = ({ initial, list, defaultLabel, }: {
    initial: SwitcherProps['initial'];
    list: SwitcherProps['list'];
    defaultLabel: string;
}) => SelectProps['renderControl'];
export declare const renderSwitcher: RenderSwitcherType;
export declare const renderFilter: SelectProps['renderFilter'];
export declare const renderOption: (option: PcSelectOption) => JSX.Element;
export {};
