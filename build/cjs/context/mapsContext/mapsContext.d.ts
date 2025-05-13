import React from 'react';
export declare enum MapType {
    Yandex = "yandex",
    Google = "google"
}
export declare const Maplangs: {
    ru: string;
    en: string;
};
export interface MapsContextType {
    apiKey: string;
    type: MapType;
    scriptSrc: string;
    nonce?: string;
    setKey?: (newKey: string) => void;
}
export declare const initialMapValue: {
    apiKey: string;
    scriptSrc: string;
    type: MapType;
};
export declare const MapsContext: React.Context<MapsContextType>;
