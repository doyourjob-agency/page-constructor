import {
    BlockBaseProps,
    BlockHeaderProps,
    containerSizesArray,
    sizeNumber,
} from '../../schema/validators/common';
import {filteredArray} from '../../schema/validators/utils';
import {HighlightTable} from '../HighlightTable/schema';

const tabsItem = {
    type: 'object',
    additionalProperties: false,
    required: ['tabName', 'table'],
    properties: {
        ...HighlightTable,
        tabName: {
            type: 'string',
        },
    },
};

export const TabsHighlightTableBlock = {
    'tabs-highlight-table-block': {
        additionalProperties: false,
        required: ['title', 'items'],
        properties: {
            ...BlockBaseProps,
            ...BlockHeaderProps,
            tabsColSizes: containerSizesArray.reduce(
                (acc, size) => ({...acc, [size]: sizeNumber}),
                {},
            ),
            centered: {type: 'boolean'},
            items: filteredArray(tabsItem),
        },
    },
};
