import React, { PropsWithChildren } from 'react';
import { MapType } from './mapsContext';
interface MapProviderProps {
    type: MapType;
    scriptSrc: string;
    apiKey?: string;
}
export declare const gmapApiKeyIdInLS = "gmap-api-key";
export declare const MapProvider: React.FC<PropsWithChildren<MapProviderProps>>;
export {};
