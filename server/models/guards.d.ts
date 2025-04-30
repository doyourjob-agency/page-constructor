import { Block, ConstructorItem, FormBlockData, FormBlockHubspotData, FormBlockYandexData } from './';
export declare function isBlock(block: ConstructorItem): block is Block;
export declare function isYandexDataForm(data?: FormBlockData): data is FormBlockYandexData;
export declare function isHubspotDataForm(data?: FormBlockData): data is FormBlockHubspotData;
