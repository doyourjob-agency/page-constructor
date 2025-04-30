import { BlockTypes, } from './';
export function isBlock(block) {
    return block.type in BlockTypes;
}
export function isYandexDataForm(data) {
    return Boolean(data === null || data === void 0 ? void 0 : data.yandex);
}
export function isHubspotDataForm(data) {
    return Boolean(data === null || data === void 0 ? void 0 : data.hubspot);
}
