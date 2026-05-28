import React, {useMemo} from 'react';

import {Image} from '../../components';
import {Col, Grid, Row} from '../../grid';
import {PartnerHeaderBlockProps} from '../../models';
import {block} from '../../utils/cn';

import './PartnerHeader.scss';

const b = block('partner-header-block');

const colSizes = {all: 12, md: 6};

const PartnerHeaderBlock = ({
    levelColorText,
    levelColorBackground,
    level,
    label,
    title,
    logo,
    background,
}: PartnerHeaderBlockProps) => {
    const levelStyles = useMemo(
        () => ({'background-color': levelColorBackground, color: levelColorText}),
        [levelColorBackground, levelColorText],
    );
    return (
        <div className={b()}>
            {background && (
                <Image
                    src={background}
                    className={b('background-image')}
                    containerClassName={b('background')}
                />
            )}
            <Grid>
                <Row className={b('container')}>
                    <Col className={b('left')} sizes={colSizes}>
                        {level && (
                            <div className={b('level')} style={levelStyles}>
                                {level}
                            </div>
                        )}
                        <div className={b('wrap')}>
                            {label && <div className={b('label')}>{label}</div>}
                            {title && <h1 className={b('title')}>{title}</h1>}
                        </div>
                    </Col>
                    <Col sizes={colSizes}>
                        <div className={b('right')}>
                            <Image src={logo} className={b('logo')} />
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

export default React.memo(PartnerHeaderBlock);
