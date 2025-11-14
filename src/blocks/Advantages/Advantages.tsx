import React, {useMemo} from 'react';

import {Link} from '@gravity-ui/uikit';

import {Image, RouterLink} from '../../components';
import AnimateBlock from '../../components/AnimateBlock/AnimateBlock';
import {Col, Grid, Row} from '../../grid';
import {AdvantagesBlockProps} from '../../models';
import {block} from '../../utils';

import './Advantages.scss';

const b = block('advantages-block');

const colSizesHeader = {all: 12, lg: 4};
const colSizesBody = {all: 12, lg: 8};
const colSizesItemWrap = {all: 12, md: 3};
const colSizesItemDesc = {all: 12, md: 9};

export const AdvantagesBlock = (props: AdvantagesBlockProps) => {
    const {animated, title, link, hoverColor, items} = props;

    const styles = useMemo(
        () => ({['--pc-ab-hover-color']: hoverColor} as React.CSSProperties),
        [hoverColor],
    );

    return (
        <AnimateBlock className={b()} style={styles} animate={animated}>
            <Grid>
                <Row>
                    <Col sizes={colSizesHeader} className={b('header')}>
                        {title && <h2 className={b('title')}>{title}</h2>}
                        {link && (
                            <Link className={b('link')} href={link.url}>
                                {link.text}
                            </Link>
                        )}
                    </Col>
                    <Col sizes={colSizesBody}>
                        <Grid>
                            {items?.map((item, index) => (
                                <RouterLink href={item.url} key={index}>
                                    <Link href={item.url} className={b('item')}>
                                        <Row>
                                            <Col
                                                sizes={colSizesItemWrap}
                                                className={b('item-wrap')}
                                            >
                                                <Image
                                                    className={b('item-icon')}
                                                    src={item.icon}
                                                    alt=""
                                                    aria-hidden="true"
                                                />
                                                <h3 className={b('item-title')}>{item.title}</h3>
                                            </Col>
                                            <Col
                                                className={b('item-desc')}
                                                sizes={colSizesItemDesc}
                                            >
                                                {item.description}
                                            </Col>
                                        </Row>
                                    </Link>
                                </RouterLink>
                            ))}
                        </Grid>
                    </Col>
                </Row>
            </Grid>
        </AnimateBlock>
    );
};

export default AdvantagesBlock;
