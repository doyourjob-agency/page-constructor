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
