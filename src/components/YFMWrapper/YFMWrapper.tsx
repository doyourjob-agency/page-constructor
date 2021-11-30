import React from 'react';
/* we won't use 'pc' class prefix here to let you opportunity to define yfm styles
in your project via global 'yfm' class */
import block from 'bem-cn-lite';
import toSnakeCase from 'snakecase-keys';
import {HTML} from '@doc-tools/components';
import {ClassNameProps} from '@yandex-data-ui/cloud-components';

import {Modifiers} from '../../models';

const yfm = block('yfm');

export interface YFMWrapperProps {
    className?: string;
    content: string;
    modifiers?: Modifiers;
}

const YFMWrapper: React.FunctionComponent<YFMWrapperProps & ClassNameProps> = ({
    content,
    modifiers,
    className,
}) => <HTML className={yfm(modifiers ? toSnakeCase(modifiers) : {}, className)}>{content}</HTML>;

export default YFMWrapper;
