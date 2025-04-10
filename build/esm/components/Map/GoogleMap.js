import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Lang } from '@gravity-ui/uikit';
import debounce from 'lodash/debounce';
import { LocaleContext } from '../../context/localeContext/localeContext';
import { MapsContext } from '../../context/mapsContext/mapsContext';
import { MobileContext } from '../../context/mobileContext';
import { block } from '../../utils';
import { getMapHeight } from './helpers';
const b = block('map');
function getScriptSrc(params) {
    const { apiKey, scriptSrc, address, lang, zoom } = params;
    return `${scriptSrc}?key=${apiKey}&language=${lang}${zoom ? '&zoom=' + zoom : ''}&q=${encodeURI(address)}`;
}
const GoogleMap = (props) => {
    const { address, zoom, className } = props;
    const { apiKey, scriptSrc } = useContext(MapsContext);
    const { lang = Lang.Ru } = useContext(LocaleContext);
    const isMobile = useContext(MobileContext);
    const [height, setHeight] = useState(undefined);
    const ref = useRef(null);
    const src = useMemo(() => getScriptSrc({ apiKey, scriptSrc, address, lang, zoom }), [apiKey, scriptSrc, address, lang, zoom]);
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
    }, [isMobile]);
    if (!apiKey || !address) {
        return null;
    }
    return (React.createElement("iframe", { className: b(null, className), ref: ref, style: {
            height,
        }, title: "Google Map", loading: "lazy", allowFullScreen: true, referrerPolicy: "no-referrer-when-downgrade", src: src }));
};
export default GoogleMap;
