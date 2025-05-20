import { SelectProps } from '@gravity-ui/uikit';
import { FeedHeaderOption } from '../../../context/feedHeaderContext';
type RenderControlParameters = Partial<Parameters<Required<SelectProps>['renderControl']>[0]>;
export type SwitcherProps = {
    initial: (string | number | null)[];
    defaultLabel: string;
    list: FeedHeaderOption[];
    controlRef: RenderControlParameters['ref'];
} & Omit<RenderControlParameters, 'ref'>;
export declare const Switcher: ({ initial, defaultLabel, list, onClick, controlRef, onKeyDown, open, renderClear, popupId, activeIndex, }: SwitcherProps) => JSX.Element;
export default Switcher;
