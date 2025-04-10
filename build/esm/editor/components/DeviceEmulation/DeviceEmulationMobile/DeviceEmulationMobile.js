import { __rest } from "tslib";
import React, { useContext, useEffect, useRef } from 'react';
import { block } from '../../../../utils';
import { EditorContext } from '../../../context';
import { DeviceIframe } from '../../../widget';
import './DeviceEmulationMobile.css';
const b = block('device-emulation-mobile');
const DeviceEmulationMobile = ({ device, active }) => {
    const _a = useContext(EditorContext), { deviceEmulationSettings } = _a, initialData = __rest(_a, ["deviceEmulationSettings"]);
    const containerRef = useRef(null);
    const deviceIframeRef = useRef(null);
    useEffect(() => {
        let iframe;
        if (containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) {
            iframe = new DeviceIframe(containerRef === null || containerRef === void 0 ? void 0 : containerRef.current, {
                initialData,
                className: b('frame', { device }),
                settings: deviceEmulationSettings,
            });
            deviceIframeRef.current = iframe;
        }
        return () => {
            iframe === null || iframe === void 0 ? void 0 : iframe.destroy();
        };
        // render iframe only once, then update it's data with postMessage
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [device]);
    useEffect(() => {
        if (deviceIframeRef.current) {
            deviceIframeRef.current.onActivenessUpdate(active);
        }
    }, [active]);
    useEffect(() => {
        if (deviceIframeRef.current && initialData) {
            deviceIframeRef.current.onDataUpdate(initialData);
        }
    }, [initialData]);
    return React.createElement("div", { className: b({ active, device }), ref: containerRef });
};
export default DeviceEmulationMobile;
