import { useEffect, useState } from 'react';
import yaml from 'js-yaml';
import usePreviousValue from '../../../hooks/usePreviousValue';
/**
 * Transorms PageConstructor content in JSON to YAML on code editor mode switching
 *
 * @param {Object} props - props parent from form
 * @returns {string} - updated code
 */
export function useCode({ content, codeFullscreeModeOn, isCodeEditMode }) {
    var _a;
    const [code, setCode] = useState('');
    const prevContentLength = usePreviousValue((_a = content.blocks) === null || _a === void 0 ? void 0 : _a.length);
    const prevCodeFullscreeModeOn = usePreviousValue(codeFullscreeModeOn);
    useEffect(() => {
        var _a;
        const blocksCountChanged = prevContentLength !== ((_a = content.blocks) === null || _a === void 0 ? void 0 : _a.length);
        const codeModeSwitched = codeFullscreeModeOn !== prevCodeFullscreeModeOn;
        if (blocksCountChanged || isCodeEditMode || codeModeSwitched) {
            setCode(yaml.dump(content, { lineWidth: -1 }));
        }
    }, [isCodeEditMode, content, prevContentLength, codeFullscreeModeOn, prevCodeFullscreeModeOn]);
    return code;
}
