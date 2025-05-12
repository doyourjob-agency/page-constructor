"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHubspotEvents = exports.loopBackHabspotEvents = exports.isHubspotEventData = void 0;
function isHubspotEventData(maybeData) {
    return (typeof maybeData === 'object' &&
        maybeData !== null &&
        'type' in maybeData &&
        maybeData['type'] === 'hsFormCallback');
}
exports.isHubspotEventData = isHubspotEventData;
function loopBackHabspotEvents(formId) {
    return ({ data, source, origin }) => {
        if (!isHubspotEventData(data)) {
            return;
        }
        if (data.id !== formId) {
            return;
        }
        if (source === window) {
            return;
        }
        source === null || source === void 0 ? void 0 : source.postMessage(data, origin);
    };
}
exports.loopBackHabspotEvents = loopBackHabspotEvents;
function handleHubspotEvents(handlers, formId) {
    return ({ data }) => {
        var _a, _b, _c, _d, _e;
        if (!isHubspotEventData(data)) {
            return;
        }
        if (data.id !== formId) {
            return;
        }
        switch (data.eventName) {
            case 'onBeforeFormInit': {
                (_a = handlers.onBeforeLoad) === null || _a === void 0 ? void 0 : _a.call(handlers, data);
                break;
            }
            case 'onFormReady': {
                (_b = handlers.onLoad) === null || _b === void 0 ? void 0 : _b.call(handlers, data);
                break;
            }
            case 'onFormSubmit': {
                (_c = handlers.onBeforeSubmit) === null || _c === void 0 ? void 0 : _c.call(handlers, data);
                break;
            }
            case 'onFormSubmitted': {
                (_d = handlers.onSubmit) === null || _d === void 0 ? void 0 : _d.call(handlers, data);
                break;
            }
            case 'onFormError': {
                (_e = handlers.onSubmitError) === null || _e === void 0 ? void 0 : _e.call(handlers, data);
                break;
            }
            default:
                break;
        }
    };
}
exports.handleHubspotEvents = handleHubspotEvents;
