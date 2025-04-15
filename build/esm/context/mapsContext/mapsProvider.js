import React, { useState } from 'react';
import { MapType, MapsContext } from './mapsContext';
export const gmapApiKeyIdInLS = 'gmap-api-key';
export const MapProvider = ({ type = MapType.Yandex, scriptSrc, apiKey, children, }) => {
    const initialKeyValue = type === MapType.Google
        ? apiKey || localStorage.getItem(gmapApiKeyIdInLS) || ''
        : apiKey || '';
    const [currentApiKey, setKey] = useState(initialKeyValue);
    return (React.createElement(MapsContext.Provider, { value: { apiKey: currentApiKey, setKey, scriptSrc, type } }, children));
};
