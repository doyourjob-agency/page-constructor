import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Spin } from '@gravity-ui/uikit';
import debounce from 'lodash/debounce';
import { LocaleContext } from '../../../context/localeContext/localeContext';
import { MapsContext } from '../../../context/mapsContext/mapsContext';
import { MobileContext } from '../../../context/mobileContext';
import { block } from '../../../utils';
import ErrorWrapper from '../../ErrorWrapper/ErrorWrapper';
import { getMapHeight } from '../helpers';
import { YMap } from './YMap';
import { MapApiStatus, YMapsApiLoader } from './YandexMapApiLoader';
import { i18n } from './i18n';
const b = block('map');
const DEFAULT_CONTAINER_ID = 'ymap';
const DEFAULT_ZOOM = 9;
// Center - is a required parameter for creating a new map
// We use this init center to create a map
// The real center of the map will be calculated later, using the coordinates of the markers
const INITIAL_CENTER = [0, 0];
const YandexMap = (props) => {
    const { markers, zoom, id, className } = props;
    const { apiKey, scriptSrc, nonce } = useContext(MapsContext);
    const isMobile = useContext(MobileContext);
    const { lang = 'ru' } = useContext(LocaleContext);
    const containerId = `${DEFAULT_CONTAINER_ID}-${id}`;
    const [ymap, setYmaps] = useState(null);
    const [height, setHeight] = useState(undefined);
    const ref = useRef(null);
    const [loading, setLoading] = useState(false);
    const [ready, setReady] = useState(false);
    const [attemptsIndex, setAttemptsIndex] = useState(0);
    const onTryAgain = useCallback(() => {
        setAttemptsIndex(attemptsIndex + 1);
    }, [attemptsIndex]);
    useEffect(() => {
        (async function () {
            var _a;
            setLoading(true);
            await YMapsApiLoader.loadApi(apiKey, scriptSrc, lang, nonce);
            (_a = window.ymaps) === null || _a === void 0 ? void 0 : _a.ready(() => {
                setYmaps(new YMap(new window.ymaps.Map(containerId, {
                    center: INITIAL_CENTER,
                    zoom: zoom || DEFAULT_ZOOM,
                }, { autoFitToViewport: 'always' }), ref.current));
            });
            setLoading(false);
        })();
    }, [apiKey, lang, scriptSrc, containerId, zoom, nonce, attemptsIndex, setLoading]);
    useEffect(() => {
        const updateSize = debounce(() => {
            if (ref.current) {
                setHeight(Math.round(getMapHeight(ref.current.offsetWidth, isMobile)));
            }
        }, 100);
        updateSize();
        window.addEventListener('resize', updateSize, { passive: true });
        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, [markers, ymap, setYmaps, isMobile]);
    useEffect(() => {
        if (ymap) {
            // show with computed center and placemarks
            const showPlacemarks = async () => {
                await ymap.showPlacemarks({ markers, zoom });
                setReady(true);
            };
            showPlacemarks();
        }
    });
    if (!markers)
        return null;
    return (React.createElement(ErrorWrapper, { isError: YMapsApiLoader.status === MapApiStatus.Error, text: i18n('map-load-error'), buttonText: i18n('map-try-again'), handler: onTryAgain, className: b('wrapper') },
        React.createElement("div", { className: b('wrapper') },
            React.createElement("div", { id: containerId, className: b({ hidden: !ready }, className), ref: ref, style: { height } }),
            loading ? React.createElement(Spin, { size: "xl", className: b('spinner') }) : null)));
};
export default YandexMap;
