import React from 'react';

import {ArrowLeft} from '@gravity-ui/icons';
import {Button, Icon} from '@gravity-ui/uikit';

import {PageHelperContextProps} from '../../../context/pageHelperContext';
import {Col, Row} from '../../../grid';
import {TextTheme} from '../../../models';
import {block} from '../../../utils';

import './BackButton.scss';

const b = block('header-block-back-button');

export const BackButton = ({
    backButton,
    theme,
}: {
    backButton: PageHelperContextProps['backButton'];
    theme: TextTheme;
}) => {
    if (!backButton) return null;
    return (
        <Row>
            <Col>
                <Button
                    href={backButton.link}
                    size="l"
                    view="flat-secondary"
                    className={b('back-link', {theme})}
                >
                    <Icon data={ArrowLeft} size={20} />
                    {backButton.text}
                </Button>
            </Col>
        </Row>
    );
};

export default BackButton;
