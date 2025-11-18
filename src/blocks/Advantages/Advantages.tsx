import React from 'react';

import {Link} from '@gravity-ui/uikit';

import {HTML, Image, RouterLink} from '../../components';
import {Col, Grid, Row} from '../../grid';
import {AdvantagesBlockProps} from '../../models';
import {block} from '../../utils';

import './Advantages.scss';

const b = block('advantages-block');

const colSizesHeader = {all: 12, xl: 6};
const colSizesBody = {all: 12, xl: 6};

export const AdvantagesBlock = (props: AdvantagesBlockProps) => {
    const {title, link, logo, items} = props;

    return (
        <div className={b()}>
            <Grid>
                <Row>
                    <Col sizes={colSizesHeader} className={b('header')}>
                        {title && (
                            <h2 className={b('title')}>
                                <HTML>{title}</HTML>
                            </h2>
                        )}
                        {link && (
                            <Link className={b('link')} href={link.url}>
                                {link.text}
                            </Link>
                        )}
                        {logo && (
                            <div className={b('wrap-logo')}>
                                <Image className={b('logo')} src={logo} alt="" aria-hidden="true" />
                            </div>
                        )}
                    </Col>
                    <Col sizes={colSizesBody}>
                        <Grid>
                            {items?.map((item, index) => (
                                <RouterLink href={item.url} key={index}>
                                    <Link href={item.url} className={b('item')}>
                                        <div className={b('item-wrap')}>
                                            <h3 className={b('item-title')}>{item.title}</h3>
                                            <div className={b('item-desc')}>{item.description}</div>
                                        </div>
                                        {item.image && (
                                            <Image
                                                className={b('item-image')}
                                                src={item.image}
                                                alt=""
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Link>
                                </RouterLink>
                            ))}
                        </Grid>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

export default AdvantagesBlock;
