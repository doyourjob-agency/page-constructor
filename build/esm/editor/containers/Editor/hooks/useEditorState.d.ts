import { EditModeItem, EditorProps, ViewModeItem } from '../../../types';
export declare const useEditorState: ({ customSchema, onChange, providerProps, transformContent, deviceEmulationSettings, theme: editorTheme, ...rest }: EditorProps) => {
    context: {
        constructorProps: {
            content: import("../../../../models").PageContent;
            custom: import("../../../../models").CustomConfig | undefined;
        };
        providerProps: {
            isMobile: boolean;
            theme: import("../../../../models").Theme;
            locale?: import("../../../../context/localeContext").LocaleContextProps | undefined;
            location?: import("../../../../context/locationContext").LocationContextProps | undefined;
            ssrConfig?: import("../../../../context/ssrContext").SSRContextProps | undefined;
            mapsContext?: import("../../../../context/mapsContext/mapsContext").MapsContextType | undefined;
            projectSettings?: import("../../../../context/projectSettingsContext").ProjectSettingsContextProps | undefined;
            analytics?: import("../../../..").AnalyticsContextProps | undefined;
            forms?: import("../../../../context/formsContext").FormsContextProps | undefined;
            image?: import("../../../../context/imageContext").ImageContextProps | undefined;
        };
        deviceEmulationSettings: import("../../../types").DeviceEmulationSettings | undefined;
        theme: import("../../../../models").Theme | undefined;
    };
    viewMode: ViewModeItem;
    editMode: EditModeItem;
    constructorTheme: import("../../../../models").Theme;
    onThemeUpdate: (newTheme: import("../../../../models").Theme) => void;
    onViewModeUpdate: (newViewMode: ViewModeItem) => void;
    onEditModeUpdate: (newEditMode: EditModeItem) => void;
    isCodeEditMode: boolean;
    isDesktopViewMode: boolean;
    content: import("../../../../models").PageContent;
    schema: import("json-schema").JSONSchema4;
    onContentUpdate: (newContent: import("../../../../models").PageContent) => void;
    code: string;
    codeValidator: import("../../../hooks/useCodeValidator").CodeValidator;
    codeFullscreeModeOn: boolean;
    onCodeFullscreeModeOnUpdate: (newCodeFullscreeModeOn: boolean) => void;
    activeBlockIndex: number;
    onSelect: (index: number) => void;
    isCodeOnlyMode: boolean;
    errorBoundaryState: number;
    outgoingProps: {
        content: import("../../../../models").PageContent;
        custom: import("../../../../models").CustomConfig | undefined;
        viewMode: ViewModeItem;
    };
    onAdd: (block: import("../../../../models").Block) => void;
    isFormEditMode: boolean;
};
