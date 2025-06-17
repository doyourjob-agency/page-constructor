import React from 'react';

import {useUniqId} from '@gravity-ui/uikit';

import {CardBase, IconWrapper, Tag} from '../../components';
import {useTheme} from '../../context/theme';
import {BasicCardProps} from '../../models';
import {IconPosition} from '../../models/constructor-items/sub-blocks';
import {block, getThemedValue} from '../../utils';
import Content from '../Content/Content';

import './BasicCard.scss';

const b = block('basic-card');

const BasicCard = (props: BasicCardProps) => {
    const {
        title,
        text,
        icon,
        additionalInfo,
        links,
        list,
        buttons,
        iconPosition = IconPosition.Top,
        controlPosition = 'content',
        label,
        ...cardParams
    } = props;
    const titleId = useUniqId();
    const descriptionId = useUniqId();
    const areControlsInFooter = controlPosition === 'footer';
    const theme = useTheme();
    const themedIcon = getThemedValue(icon, theme);

    return (
        <CardBase
            className={b()}
            contentClassName={b('content')}
            {...cardParams}
            extraProps={{'aria-describedby': descriptionId, 'aria-labelledby': titleId}}
        >
            <CardBase.Content>
                {label && (
                    <div className={b('label')}>
                        <Tag {...label} />
                    </div>
                )}
                <IconWrapper
                    icon={themedIcon ? {value: themedIcon, position: iconPosition} : undefined}
                    className={b('wrapper')}
                >
                    <Content
                        title={title}
                        titleId={titleId}
                        text={text}
                        textId={descriptionId}
                        additionalInfo={additionalInfo}
                        links={links}
                        list={list}
                        buttons={buttons}
                        size="s"
                        colSizes={{all: 12, md: 12}}
                        controlPosition={areControlsInFooter ? 'bottom' : 'default'}
                    />
                </IconWrapper>
            </CardBase.Content>
        </CardBase>
    );
};

export default React.memo(BasicCard);
