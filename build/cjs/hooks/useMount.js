"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useMount(handler) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, react_1.useEffect)(handler, []);
}
exports.default = useMount;
