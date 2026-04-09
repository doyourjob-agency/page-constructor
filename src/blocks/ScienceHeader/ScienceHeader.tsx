import React, {useContext} from 'react';

import {ShareLayoutDirection, SharePopover} from '@gravity-ui/components';
import {Icon} from '@gravity-ui/uikit';

import {HTML, Image} from '../../components';
import {MobileContext} from '../../context/mobileContext';
import {Col, Row} from '../../grid';
import {ShareArrowUp} from '../../icons';
import {TimeIcon} from '../../icons/TimeIcon';
import {ScienceHeaderBlockProps} from '../../models';
import {block} from '../../utils/cn';

import {i18n} from './i18n';

import './ScienceHeader.scss';

const b = block('science-header-block');

const leftColumn = {all: 12, md: 5};
const rightColumn = {all: 12, md: 7};

const ScienceHeaderBlock = ({
    topic,
    title,
    description,
    author,
    date,
    readingTime,
    image,
    shareOptions,
    shareUrl,
}: ScienceHeaderBlockProps) => {
    const isMobile = useContext(MobileContext);

    return (
        <div className={b()}>
            <Row>
                <Col sizes={leftColumn}>
                    <div className={b('left')}>
                        <div className={b('body')}>
                            <div className={b('tag')}>{topic}</div>
                            {title && (
                                <h2 className={b('title')}>
                                    <HTML>{title}</HTML>
                                </h2>
                            )}
                            {description && <HTML className={b('description')}>{description}</HTML>}
                            {author && <div className={b('author')}>{author}</div>}
                        </div>
                        <div className={b('footer')}>
                            {date && <div className={b('item')}>{date}</div>}
                            {readingTime && (
                                <div className={b('item')}>
                                    <span className={b('icon')}>
                                        <Icon
                                            data={TimeIcon}
                                            size={16}
                                            className={b('icon-color')}
                                        />
                                    </span>
                                    {i18n('reading_time', {count: readingTime})}
                                </div>
                            )}
                            {shareOptions?.length && (
                                <SharePopover
                                    url={shareUrl || ''}
                                    switcherClassName={b('switcher')}
                                    useWebShareApi={isMobile}
                                    direction={ShareLayoutDirection.Column}
                                    buttonTitle={i18n('share')}
                                    customIcon={ShareArrowUp}
                                    placement="bottom"
                                    openByHover={false}
                                    shareOptions={shareOptions}
                                />
                            )}
                        </div>
                    </div>
                </Col>
                <Col sizes={rightColumn} className={b('right')}>
                    <Image src={image} className={b('img')} />
                </Col>
            </Row>
        </div>
    );
};

export default React.memo(ScienceHeaderBlock);
