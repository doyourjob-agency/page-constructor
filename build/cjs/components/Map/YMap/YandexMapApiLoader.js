"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YMapsApiLoader = exports.MapApiStatus = void 0;
const mapsContext_1 = require("../../../context/mapsContext/mapsContext");
const utils_1 = require("../../../utils");
var MapApiStatus;
(function (MapApiStatus) {
    MapApiStatus["NotStarted"] = "not_started";
    MapApiStatus["Loading"] = "loading";
    MapApiStatus["Loaded"] = "loaded";
    MapApiStatus["Error"] = "error";
})(MapApiStatus = exports.MapApiStatus || (exports.MapApiStatus = {}));
const SCRIPT_ID = 'ymaps-script';
class YMapsApiLoader {
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
        const src = `${scriptSrc}?apikey=${apiKey}&lang=${mapsContext_1.Maplangs[lang]}&${csp}`;
        YMapsApiLoader.loader = (0, utils_1.loadScript)(src, { id: SCRIPT_ID })
            .then(() => {
            YMapsApiLoader.status = MapApiStatus.Loaded;
        })
            .catch(() => {
            YMapsApiLoader.status = MapApiStatus.Error;
        });
        return this.loader;
    }
}
exports.YMapsApiLoader = YMapsApiLoader;
YMapsApiLoader.status = MapApiStatus.NotStarted;
