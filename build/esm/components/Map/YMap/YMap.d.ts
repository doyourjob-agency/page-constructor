import { YMapMarker, YMapProps } from '../../../models';
type PlacemarksProps = Pick<YMapProps, 'zoom' | 'markers'>;
export declare class YMap {
    private ymap;
    private mapRef;
    private coords;
    constructor(ymap: Ymaps.Map, mapRef: HTMLDivElement | null);
    showPlacemarks(props: PlacemarksProps): Promise<void>;
    findAddress(marker: YMapMarker): Promise<void>;
    findCoordinate(marker: YMapMarker): void;
    private drawPlaceMarkStyle;
    private recalcZoomAndCenter;
    private clearOldPlacemarks;
}
export {};
