"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = __importDefault(require("markdown-it/lib/token"));
const customSpanPlugin = (md) => {
    const pattern = /\{#([a-zA-Z0-9\-_]+)\s+([^}]+)\}/g;
    function tokenize(state) {
        var _a;
        const tokens = state.tokens;
        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            if (token.type !== 'inline' || !token.children)
                continue;
            const children = token.children;
            for (let j = 0; j < children.length; j++) {
                const child = children[j];
                if (child.type !== 'text')
                    continue;
                const text = child.content;
                const matches = [...text.matchAll(pattern)];
                if (matches.length === 0)
                    continue;
                const newTokens = [];
                let lastIndex = 0;
                for (const match of matches) {
                    const [fullMatch, id, spanText] = match;
                    const matchIndex = (_a = match.index) !== null && _a !== void 0 ? _a : 0;
                    if (matchIndex > lastIndex) {
                        const before = new token_1.default('text', '', 0);
                        before.content = text.slice(lastIndex, matchIndex);
                        newTokens.push(before);
                    }
                    const open = new token_1.default('html_inline', '', 0);
                    open.content = `<span id="${id}">`;
                    newTokens.push(open);
                    const content = new token_1.default('text', '', 0);
                    content.content = spanText;
                    newTokens.push(content);
                    const close = new token_1.default('html_inline', '', 0);
                    close.content = `</span>`;
                    newTokens.push(close);
                    lastIndex = matchIndex + fullMatch.length;
                }
                if (lastIndex < text.length) {
                    const tail = new token_1.default('text', '', 0);
                    tail.content = text.slice(lastIndex);
                    newTokens.push(tail);
                }
                children.splice(j, 1, ...newTokens);
                j += newTokens.length - 1;
            }
        }
    }
    md.core.ruler.push('custom_span_plugin', tokenize);
};
exports.default = customSpanPlugin;
