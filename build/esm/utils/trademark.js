export const replaceTrademark = (content) => content.replace(/&reg;|®/g, '<sup>®</sup>').replace(/&trade;|™/g, '<sup>™</sup>');
