export const replaceTrademark = (content: string): string =>
    content.replace(/&reg;|®/g, '<sup>®</sup>').replace(/&trade;|™/g, '<sup>™</sup>');
