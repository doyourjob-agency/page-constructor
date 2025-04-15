import { ClassNameProps, Theme } from '../../../models';
import { EditModeItem, ViewModeItem } from '../../types';
export interface ControlPanelProps extends ClassNameProps {
    viewMode?: ViewModeItem;
    editMode?: EditModeItem;
    onViewModeChange: (viewMode: ViewModeItem) => void;
    onEditModeChange: (editMode: EditModeItem) => void;
    theme: Theme;
    onThemeChange: (theme: Theme) => void;
}
declare const ControlPanel: ({ viewMode, editMode, onViewModeChange, onEditModeChange, className, theme, onThemeChange, }: ControlPanelProps) => JSX.Element;
export default ControlPanel;
