"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHubspotDataForm = exports.isYandexDataForm = exports.isBlock = void 0;
const _1 = require("./");
function isBlock(block) {
    return block.type in _1.BlockTypes;
}
exports.isBlock = isBlock;
function isYandexDataForm(data) {
    return Boolean(data === null || data === void 0 ? void 0 : data.yandex);
}
exports.isYandexDataForm = isYandexDataForm;
function isHubspotDataForm(data) {
    return Boolean(data === null || data === void 0 ? void 0 : data.hubspot);
}
exports.isHubspotDataForm = isHubspotDataForm;
