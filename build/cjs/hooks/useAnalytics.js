"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAnalytics = void 0;
const react_1 = require("react");
const analyticsContext_1 = require("../context/analyticsContext");
const blockIdContext_1 = require("../context/blockIdContext");
const models_1 = require("../models");
const useAnalytics = (name = '', target) => {
    const { sendEvents, autoEvents } = (0, react_1.useContext)(analyticsContext_1.AnalyticsContext);
    const context = (0, react_1.useContext)(blockIdContext_1.BlockIdContext);
    const defaultEvent = (0, react_1.useMemo)(() => name
        ? {
            name,
            context,
            type: models_1.PredefinedEventTypes.Default,
            target: target,
        }
        : undefined, [context, name, target]);
    if (!sendEvents) {
        return () => { };
    }
    const defaultEvents = defaultEvent && autoEvents ? [defaultEvent] : [];
    return (e, additionalContext) => {
        let events = defaultEvents;
        if (e) {
            events = Array.isArray(e) ? [...events, ...e] : [...events, e];
        }
        if (!events) {
            return;
        }
        const preparedEvents = additionalContext
            ? events.map((event) => (Object.assign(Object.assign({}, event), additionalContext)))
            : events;
        sendEvents(preparedEvents);
    };
};
exports.useAnalytics = useAnalytics;
