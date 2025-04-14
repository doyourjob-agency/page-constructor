//widget bundle available after build only
//@ts-ignore
import bundle from '../../../../widget';
import { DeviceFrameMessageType } from './constants';
import { getHostStyles } from './utils';
export class DeviceIframe {
    constructor(parentElement, { className = '', initialData, settings }) {
        const iframe = document.createElement('iframe');
        parentElement.appendChild(iframe);
        if (iframe.contentWindow) {
            const frameDoc = iframe.contentWindow.document;
            iframe.className = className;
            frameDoc.body.classList.add(...document.body.classList, ...className.split(' '));
            iframe.style.visibility = 'hidden';
            this.iframeElement = iframe;
            this.initialData = initialData;
            this.settings = settings;
            window.addEventListener('message', this.onInit.bind(this));
            this.addWidgetScript();
            this.addCustomStyles();
        }
    }
    onDataUpdate(data) {
        var _a, _b;
        (_b = (_a = this.iframeElement) === null || _a === void 0 ? void 0 : _a.contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage({
            type: DeviceFrameMessageType.Update,
            data,
        }, window.origin);
    }
    onActivenessUpdate(active) {
        if (this.iframeElement) {
            this.iframeElement.style.visibility = active ? 'visible' : 'hidden';
        }
    }
    destroy() {
        window.removeEventListener('message', this.onInit.bind(this));
    }
    addWidgetScript() {
        var _a, _b;
        const frameDoc = (_b = (_a = this.iframeElement) === null || _a === void 0 ? void 0 : _a.contentWindow) === null || _b === void 0 ? void 0 : _b.document;
        if (frameDoc) {
            const head = frameDoc === null || frameDoc === void 0 ? void 0 : frameDoc.getElementsByTagName('head')[0];
            const script = frameDoc.createElement('script');
            script.appendChild(document.createTextNode(bundle));
            head.appendChild(script);
        }
    }
    addCustomStyles() {
        var _a, _b;
        const { applyHostStyles, customStyles } = this.settings || {};
        const frameDoc = (_b = (_a = this.iframeElement) === null || _a === void 0 ? void 0 : _a.contentWindow) === null || _b === void 0 ? void 0 : _b.document;
        if (frameDoc) {
            const head = frameDoc === null || frameDoc === void 0 ? void 0 : frameDoc.getElementsByTagName('head')[0];
            let styles = applyHostStyles ? getHostStyles() : '';
            if (customStyles) {
                styles += `\n${customStyles}`;
            }
            if (styles) {
                const style = frameDoc.createElement('style');
                style.appendChild(document.createTextNode(styles));
                head.appendChild(style);
            }
        }
    }
    onInit(event) {
        const { type } = event.data;
        if (type === DeviceFrameMessageType.Ready && this.initialData) {
            this.onDataUpdate(this.initialData);
        }
    }
}
