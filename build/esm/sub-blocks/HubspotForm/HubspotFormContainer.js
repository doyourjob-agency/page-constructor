import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { useMount } from '../../hooks';
import loadHubspotScript from './loadHubspotScript';
const HubspotFormContainer = forwardRef((props, ref) => {
    const { className, formId, formInstanceId, portalId, region, formClassName, createDOMElement, } = props;
    const containerRef = useRef(null);
    const hsContainerRef = useRef();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    useImperativeHandle(ref, () => containerRef.current);
    const containerId = formInstanceId
        ? `hubspot-form-${formId}-${formInstanceId}`
        : `hubspot-form-${formId}`;
    const createForm = () => {
        if (containerRef.current && !hsContainerRef.current && createDOMElement) {
            hsContainerRef.current = document.createElement('div');
            containerRef.current.id = '';
            hsContainerRef.current.id = containerId;
            containerRef.current.appendChild(hsContainerRef.current);
        }
        if (!createDOMElement || hsContainerRef.current) {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region,
                    portalId,
                    formId,
                    target: `#${containerId}`,
                    cssClass: formClassName,
                    formInstanceId,
                });
            }
        }
    };
    useMount(() => {
        (async () => {
            if (!window.hbspt) {
                await loadHubspotScript();
            }
            createForm();
        })();
        return () => {
            if (createDOMElement && containerRef.current && containerRef.current.lastChild) {
                containerRef.current.removeChild(containerRef.current.lastChild);
            }
        };
    });
    return React.createElement("div", { className: className, id: containerId, ref: containerRef });
});
HubspotFormContainer.displayName = 'HubspotFormContainer';
export default HubspotFormContainer;
