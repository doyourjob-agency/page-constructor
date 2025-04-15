"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceTrademark = void 0;
const replaceTrademark = (content) => content.replace(/&reg;|®/g, '<sup>®</sup>').replace(/&trade;|™/g, '<sup>™</sup>');
exports.replaceTrademark = replaceTrademark;
