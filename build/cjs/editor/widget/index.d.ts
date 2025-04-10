import { EditorContextType } from '../context';
import { DeviceEmulationSettings } from '../types';
interface DeviceIframeParams {
    initialData?: EditorContextType;
    className?: string;
    settings?: DeviceEmulationSettings;
}
type InitialData = EditorContextType;
export declare class DeviceIframe {
    iframeElement?: HTMLIFrameElement;
    private initialData?;
    private settings?;
    constructor(parentElement: HTMLDivElement, { className, initialData, settings }: DeviceIframeParams);
    onDataUpdate(data: InitialData): void;
    onActivenessUpdate(active: boolean): void;
    destroy(): void;
    private addWidgetScript;
    private addCustomStyles;
    private onInit;
}
export {};
