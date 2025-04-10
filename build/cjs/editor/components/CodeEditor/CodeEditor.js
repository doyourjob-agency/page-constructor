"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeEditor = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const icons_1 = require("@gravity-ui/icons");
const uikit_1 = require("@gravity-ui/uikit");
const debounce_1 = tslib_1.__importDefault(require("lodash/debounce"));
const react_monaco_editor_1 = tslib_1.__importDefault(require("react-monaco-editor"));
const models_1 = require("../../../models");
const utils_1 = require("../../../utils");
const context_1 = require("../../context");
const code_1 = require("../../utils/code");
const constants_1 = require("./constants");
const b = (0, utils_1.block)('code-editor');
const ON_CHANGE_DEBOUNCE_TIMEOUT = 300;
exports.CodeEditor = react_1.default.memo(({ onChange, validator, fullscreenModeOn, onFullscreenModeOnUpdate, code }) => {
    const [message, setMessage] = (0, react_1.useState)(() => validator(code));
    const { theme = models_1.Theme.Light } = (0, react_1.useContext)(context_1.EditorContext);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onChangeWithValidation = (0, react_1.useCallback)((0, debounce_1.default)((newCode) => {
        const validationResult = validator(newCode);
        setMessage(validationResult);
        onChange((0, code_1.parseCode)(newCode));
    }, ON_CHANGE_DEBOUNCE_TIMEOUT), [onChange, validator]);
    return (react_1.default.createElement("div", { className: b({ fullscreen: fullscreenModeOn }) },
        react_1.default.createElement("div", { className: b('header') },
            react_1.default.createElement(uikit_1.Button, { view: "flat-secondary", onClick: () => onFullscreenModeOnUpdate(!fullscreenModeOn) },
                react_1.default.createElement(uikit_1.Icon, { data: fullscreenModeOn ? icons_1.ChevronsCollapseUpRight : icons_1.ChevronsExpandUpRight, size: 16 }))),
        react_1.default.createElement("div", { className: b('code') },
            react_1.default.createElement(react_monaco_editor_1.default, { key: String(fullscreenModeOn), defaultValue: code, value: code, language: "yaml", options: constants_1.options, onChange: onChangeWithValidation, theme: theme === models_1.Theme.Dark ? 'vs-dark' : 'vs' })),
        react_1.default.createElement("div", { className: b('footer') }, message && (react_1.default.createElement("div", { className: b('message-container') },
            react_1.default.createElement("div", { className: b('message', { status: message.status }) }, message.text))))));
});
exports.CodeEditor.displayName = 'CodeEditor';
