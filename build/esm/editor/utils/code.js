import yaml from 'js-yaml';
export function parseCode(code) {
    var _a;
    const pageContent = yaml.load(code);
    return Object.assign(Object.assign({}, pageContent), { blocks: (_a = pageContent.blocks) === null || _a === void 0 ? void 0 : _a.filter(Boolean) });
}
