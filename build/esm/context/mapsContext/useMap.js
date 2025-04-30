import React from 'react';
import { MapsContext } from './mapsContext';
export function useMapApiKey() {
    const { apiKey, setKey } = React.useContext(MapsContext);
    return [apiKey, setKey];
}
