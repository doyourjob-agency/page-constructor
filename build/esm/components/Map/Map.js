import React, { useContext } from 'react';
import { MapType, MapsContext } from '../../context/mapsContext/mapsContext';
import GoogleMap from './GoogleMap';
import YandexMap from './YMap/YandexMap';
import './Map.css';
export const Map = (props) => {
    const { type } = useContext(MapsContext);
    switch (type) {
        case MapType.Yandex:
            return React.createElement(YandexMap, Object.assign({}, props));
        case MapType.Google:
            return React.createElement(GoogleMap, Object.assign({}, props));
        default:
            return null;
    }
};
export default Map;
