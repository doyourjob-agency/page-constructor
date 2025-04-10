import { PageHelperContextProps } from '../../../context/pageHelperContext';
import { TextTheme } from '../../../models';
import './BackButton.css';
export declare const BackButton: ({ backButton, theme, }: {
    backButton: PageHelperContextProps['backButton'];
    theme: TextTheme;
}) => JSX.Element | null;
export default BackButton;
