import { PriceDetailsSettingsProps, TextSize } from '../../../../models';
import './Settings.css';
export interface SettingsComponentProps {
    items: PriceDetailsSettingsProps[];
    titleSize?: TextSize;
    descriptionSize?: TextSize;
}
declare const Settings: (props: SettingsComponentProps) => JSX.Element;
export default Settings;
