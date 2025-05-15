import React, { useContext } from 'react';
import { LocaleContext } from '../../../context/localeContext';
import { block } from '../../../utils';
import { i18n } from './i18n';
import { unifyDataLensToObject } from './utils';
import './DataLens.css';
const b = block('media-component-data-lens');
const DataLens = (props) => {
    const { dataLens } = props;
    const dataLensData = unifyDataLensToObject(dataLens);
    const locale = useContext(LocaleContext);
    return dataLens ? (React.createElement("div", { className: b('wrap') },
        React.createElement("iframe", { src: `https://datalens.yandex/${dataLensData.id}?_embedded=1&_theme=${dataLensData.theme}&_lang=${locale.lang}`, className: b('iframe'), loading: "lazy", title: i18n('iframe-title'), frameBorder: 0 }))) : null;
};
export default DataLens;
