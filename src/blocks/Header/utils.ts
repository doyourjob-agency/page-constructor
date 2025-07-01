import {HeaderImageSize, HeaderWidth} from '../../models';

export function titleWithImageSizes(imageSize: HeaderImageSize) {
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
            return {all: 12};
    }
}

export function getTitleSizes(width: HeaderWidth) {
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
            return {all: 12};
    }
}

export function getImageSize(width: HeaderWidth) {
    switch (width) {
        case 'm':
            return 's';
        case 's':
        default:
            return 'm';
    }
}

export const partitionSwitchingTitleInput = (str: string): string[][] => {
    if (str.length === 0) return [['']];

    const fixedRegExp = new RegExp('\\[.*', 's');
    const fixedPart = str.replace(fixedRegExp, '');

    if (fixedPart === str) return [[fixedPart]];

    const switchingPartRegExp = new RegExp('\\][^/].*', 's');
    const switchingPart = str.slice(fixedPart.length + 1).replace(switchingPartRegExp, '');

    const switchingPartArr = switchingPart.replace(/[[\]]/g, '').split('/');

    const rest = str.slice(fixedPart.length + switchingPart.length + 2);

    return [[fixedPart], switchingPartArr, ...partitionSwitchingTitleInput(rest)].filter(
        (arr) => arr.length !== 0 && (arr.length !== 1 || arr[0] !== ''),
    );
};
