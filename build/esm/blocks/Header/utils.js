export function titleWithImageSizes(imageSize) {
    switch (imageSize) {
        case 's':
            return {
                md: 8,
                all: 12,
            };
        case 'm':
            return {
                md: 6,
                all: 12,
            };
        default:
            return { all: 12 };
    }
}
export function getTitleSizes(width) {
    switch (width) {
        case 's':
            return {
                lg: 6,
                sm: 12,
                md: 8,
                all: 12,
            };
        case 'm':
            return {
                lg: 8,
                md: 8,
                sm: 12,
                all: 12,
            };
        default:
            return { all: 12 };
    }
}
export function getImageSize(width) {
    switch (width) {
        case 'm':
            return 's';
        case 's':
        default:
            return 'm';
    }
}
