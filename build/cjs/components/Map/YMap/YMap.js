"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YMap = void 0;
var GeoObjectTypes;
(function (GeoObjectTypes) {
    GeoObjectTypes["Properties"] = "properties";
    GeoObjectTypes["Options"] = "options";
})(GeoObjectTypes || (GeoObjectTypes = {}));
const DEFAULT_PLACEMARKS_COLOR = '#dc534b';
// presetStorage: https://yandex.com/dev/maps/jsapi/doc/2.1/ref/reference/option.presetStorage.html
const DEFAULT_PLACEMARKS_PRESET = 'islands#dotIcon';
const DEFAULT_MAP_CONTROL_BUTTON_HEIGHT = 30;
const geoObjectPropsAndOptions = {
    iconCaption: GeoObjectTypes.Properties,
    iconContent: GeoObjectTypes.Properties,
    iconColor: GeoObjectTypes.Options,
    preset: GeoObjectTypes.Options,
};
class YMap {
    constructor(ymap, mapRef) {
        this.coords = [];
        this.ymap = ymap;
        this.mapRef = mapRef;
    }
    async showPlacemarks(props) {
        this.clearOldPlacemarks();
        for (const marker of props.markers) {
            if (marker.address) {
                await this.findAddress(marker);
            }
            else if (marker.coordinate) {
                this.findCoordinate(marker);
            }
        }
        this.recalcZoomAndCenter(props);
    }
    async findAddress(marker) {
        try {
            const res = await window.ymaps.geocode(marker.address, { results: 1 });
            const geoObject = res.geoObjects.get(0);
            const coordinate = geoObject.geometry.getCoordinates();
            this.coords.push(coordinate);
            this.drawPlaceMarkStyle(geoObject, marker);
            this.ymap.geoObjects.add(geoObject);
        }
        catch (_a) { } // If error - placemark will not be displayed
    }
    findCoordinate(marker) {
        const geoObject = new window.ymaps.Placemark(marker.coordinate, {});
        this.coords.push(marker.coordinate);
        this.drawPlaceMarkStyle(geoObject, marker);
        this.ymap.geoObjects.add(geoObject);
    }
    drawPlaceMarkStyle(geoObject, marker) {
        const { iconColor, preset = DEFAULT_PLACEMARKS_PRESET } = marker.label || {};
        let localIconColor = iconColor;
        // You can set the preset option together with the iconColor option only if it not a 'Stretchy' preset
        if (!preset.includes('Stretchy') && !iconColor) {
            localIconColor = DEFAULT_PLACEMARKS_COLOR;
        }
        Object.entries(Object.assign(Object.assign({}, marker.label), { iconColor: localIconColor, preset })).forEach(([key, value]) => {
            const geoObjectParamType = geoObjectPropsAndOptions[key];
            if (value && geoObjectParamType) {
                geoObject[geoObjectParamType].set(key, value);
            }
        });
    }
    recalcZoomAndCenter(props) {
        var _a, _b;
        const coordsLength = this.coords.length;
        const { zoom = 0 } = props;
        if (!coordsLength) {
            return;
        }
        let leftBottom = [Infinity, Infinity], rightTop = [-Infinity, -Infinity];
        this.coords.forEach((point) => {
            leftBottom = [Math.min(leftBottom[0], point[0]), Math.min(leftBottom[1], point[1])];
            rightTop = [Math.max(rightTop[0], point[0]), Math.max(rightTop[1], point[1])];
        });
        let newMapParams = {
            zoom,
            center: [],
        };
        if (zoom) {
            // compute only the center
            newMapParams.center = window.ymaps.util.bounds.getCenter([leftBottom, rightTop]);
        }
        else {
            newMapParams = window.ymaps.util.bounds.getCenterAndZoom([leftBottom, rightTop], [(_a = this.mapRef) === null || _a === void 0 ? void 0 : _a.clientWidth, (_b = this.mapRef) === null || _b === void 0 ? void 0 : _b.clientHeight], undefined, { margin: DEFAULT_MAP_CONTROL_BUTTON_HEIGHT });
        }
        this.ymap.setCenter(newMapParams.center);
        // Use default zoom for one placemark
        if (coordsLength > 1 && !zoom) {
            this.ymap.setZoom(newMapParams.zoom);
        }
    }
    clearOldPlacemarks() {
        if (this.coords.length === 0) {
            return;
        }
        this.ymap.geoObjects.removeAll();
        this.coords = [];
    }
}
exports.YMap = YMap;
