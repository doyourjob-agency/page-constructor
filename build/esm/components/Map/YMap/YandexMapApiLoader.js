import { Maplangs } from '../../../context/mapsContext/mapsContext';
import { loadScript } from '../../../utils';
export var MapApiStatus;
(function (MapApiStatus) {
    MapApiStatus["NotStarted"] = "not_started";
    MapApiStatus["Loading"] = "loading";
    MapApiStatus["Loaded"] = "loaded";
    MapApiStatus["Error"] = "error";
})(MapApiStatus || (MapApiStatus = {}));
const SCRIPT_ID = 'ymaps-script';
export class YMapsApiLoader {
    static async loadApi(apiKey, scriptSrc, lang, nonce) {
        if (YMapsApiLoader.status === MapApiStatus.Loaded) {
            return Promise.resolve();
        }
        if (YMapsApiLoader.status === MapApiStatus.Loading) {
            await YMapsApiLoader.loader;
            return Promise.resolve();
        }
        YMapsApiLoader.status = MapApiStatus.Loading;
        const csp = nonce ? `csp[style_nonce]=${nonce}` : 'csp=true';
        const src = `${scriptSrc}?apikey=${apiKey}&lang=${Maplangs[lang]}&${csp}`;
        YMapsApiLoader.loader = loadScript(src, { id: SCRIPT_ID })
            .then(() => {
            YMapsApiLoader.status = MapApiStatus.Loaded;
        })
            .catch(() => {
            YMapsApiLoader.status = MapApiStatus.Error;
        });
        return this.loader;
    }
}
YMapsApiLoader.status = MapApiStatus.NotStarted;
