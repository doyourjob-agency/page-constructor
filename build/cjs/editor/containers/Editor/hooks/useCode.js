"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCode = void 0;
const tslib_1 = require("tslib");
const react_1 = require("react");
const js_yaml_1 = tslib_1.__importDefault(require("js-yaml"));
const usePreviousValue_1 = tslib_1.__importDefault(require("../../../hooks/usePreviousValue"));
/**
 * Transorms PageConstructor content in JSON to YAML on code editor mode switching
 *
 * @param {Object} props - props parent from form
 * @returns {string} - updated code
 */
function useCode({ content, codeFullscreeModeOn, isCodeEditMode }) {
    var _a;
    const [code, setCode] = (0, react_1.useState)('');
    const prevContentLength = (0, usePreviousValue_1.default)((_a = content.blocks) === null || _a === void 0 ? void 0 : _a.length);
    const prevCodeFullscreeModeOn = (0, usePreviousValue_1.default)(codeFullscreeModeOn);
    (0, react_1.useEffect)(() => {
        var _a;
        const blocksCountChanged = prevContentLength !== ((_a = content.blocks) === null || _a === void 0 ? void 0 : _a.length);
        const codeModeSwitched = codeFullscreeModeOn !== prevCodeFullscreeModeOn;
        if (blocksCountChanged || isCodeEditMode || codeModeSwitched) {
            setCode(js_yaml_1.default.dump(content, { lineWidth: -1 }));
        }
    }, [isCodeEditMode, content, prevContentLength, codeFullscreeModeOn, prevCodeFullscreeModeOn]);
    return code;
}
exports.useCode = useCode;
