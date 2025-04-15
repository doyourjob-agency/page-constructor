"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const hooks_1 = require("../../hooks");
const loadHubspotScript_1 = tslib_1.__importDefault(require("./loadHubspotScript"));
const HubspotFormContainer = (0, react_1.forwardRef)((props, ref) => {
    const { className, formId, formInstanceId, portalId, region, formClassName, createDOMElement, } = props;
    const containerRef = (0, react_1.useRef)(null);
    const hsContainerRef = (0, react_1.useRef)();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    (0, react_1.useImperativeHandle)(ref, () => containerRef.current);
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
    (0, hooks_1.useMount)(() => {
        (async () => {
            if (!window.hbspt) {
                await (0, loadHubspotScript_1.default)();
            }
            createForm();
        })();
        return () => {
            if (createDOMElement && containerRef.current && containerRef.current.lastChild) {
                containerRef.current.removeChild(containerRef.current.lastChild);
            }
        };
    });
    return react_1.default.createElement("div", { className: className, id: containerId, ref: containerRef });
});
HubspotFormContainer.displayName = 'HubspotFormContainer';
exports.default = HubspotFormContainer;
