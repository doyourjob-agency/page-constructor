import React, {ReactElement, useMemo} from 'react';

import AnimateBlock from '../../components/AnimateBlock/AnimateBlock';
import {Col, Grid, GridColumnSize, Row} from '../../grid';
import {MediaBaseBlockProps} from '../../models';
import {block} from '../../utils';
import Title from '../Title/Title';

import MediaContent from './MediaBaseContent';

import './MediaBase.scss';

const b = block('media-base');

const Card: React.FC<React.PropsWithChildren<{}>> = () => null;

interface MediaBaseProps extends MediaBaseBlockProps {
    children: ReactElement;
    onScroll?: () => void;
}

export const MediaBase = (props: MediaBaseProps) => {
    const {
        children,
        largeMedia,
        smallMedia,
        direction = 'content-media',
        mobileDirection = 'content-media',
        animated,
        mediaOnly,
        onScroll,
        mediaOnlyColSizes = {all: 12, md: 8},
        ...mediaContentProps
    } = props;
    const {title, description} = mediaContentProps;

    const mediaSizes = useMemo(() => {
        let md = 6;
        if (smallMedia) {
            md = 4;
        }
        if (largeMedia) {
            md = 8;
        }
        return mediaOnly
            ? {[GridColumnSize.All]: 12}
            : {[GridColumnSize.Md]: md, [GridColumnSize.All]: 12};
    }, [mediaOnly, largeMedia, smallMedia]);

    const contentSizes = useMemo(() => {
        let md = 6;
        if (smallMedia) {
            md = 8;
        }
        if (largeMedia) {
            md = 4;
        }
        return {[GridColumnSize.Md]: md, [GridColumnSize.All]: 12};
    }, [largeMedia, smallMedia]);

    const mediaContent = !mediaOnly && <MediaContent {...mediaContentProps} />;
    const card = children.type === Card ? children?.props.children : null;

    return (
        <AnimateBlock className={b()} onScroll={onScroll} animate={animated}>
            <div className={b('root')}>
                {mediaOnly && (
                    <Title
                        className={b('header')}
                        title={title}
                        subtitle={description}
                        colSizes={mediaOnlyColSizes}
                    />
                )}
                <Grid>
                    <Row
                        className={b('row', {
                            reverse: direction === 'media-content',
                            'mobile-reverse': mobileDirection === 'media-content',
                        })}
                    >
                        <Col className={b('content')} sizes={contentSizes}>
                            {mediaContent}
                        </Col>
                        {card ? (
                            <Col sizes={mediaSizes}>
                                <div className={b('card')}>{card}</div>
                            </Col>
                        ) : null}
                    </Row>
                </Grid>
            </div>
        </AnimateBlock>
    );
};

MediaBase.Card = Card;

export default MediaBase;
