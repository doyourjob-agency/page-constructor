import React, {useMemo} from 'react';

import YFMWrapper from '../../../components/YFMWrapper/YFMWrapper';
import {ClassNameProps, HeaderBlockProps} from '../../../models';

export const HeaderDescription = (
    props: Pick<HeaderBlockProps, 'description' | 'theme'> & ClassNameProps,
) => {
    const {description, theme, className} = props;

    const modifiers = useMemo(
        () => ({
            constructor: true,
            constructorTheme: theme,
        }),
        [theme],
    );

    if (!description) return null;

    return (
        <div className={className}>
            <YFMWrapper content={description} modifiers={modifiers} />
        </div>
    );
};

export default HeaderDescription;
