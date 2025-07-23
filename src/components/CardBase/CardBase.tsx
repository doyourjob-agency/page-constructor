import React, {
    Children,
    Fragment,
    HTMLAttributeAnchorTarget,
    PropsWithChildren,
    ReactElement,
    isValidElement,
    useCallback,
    useMemo,
} from 'react';

import {NoStrictEntityMods} from '@bem-react/classname';
import {Link} from '@gravity-ui/uikit';

import {useAnalytics} from '../../hooks';
import {
    AnalyticsEventsBase,
    CardBaseProps as CardBaseParams,
    DefaultEventNames,
    ImageProps,
} from '../../models';
import {block, getQaAttrubutes} from '../../utils';
import BackgroundImage from '../BackgroundImage/BackgroundImage';
import {getMediaImage} from '../Media/Image/utils';
import RouterLink from '../RouterLink/RouterLink';

import './CardBase.scss';

interface CardBaseProps extends AnalyticsEventsBase, CardBaseParams {
    className?: string;
    bodyClassName?: string;
    contentClassName?: string;
    url?: string;
    urlTitle?: string;
    target?: HTMLAttributeAnchorTarget;
    qa?: string;
    extraProps?: React.HTMLAttributes<HTMLElement>;
}

export type CardBasePropsType = PropsWithChildren<CardBaseProps>;

export interface CardHeaderBaseProps {
    className?: string;
    image?: ImageProps | null;
    imageMods?: NoStrictEntityMods;
    imageExtraProps?: React.HTMLAttributes<HTMLImageElement>;
}

export interface CardFooterBaseProps {
    className?: string;
}

const b = block('card-base-block');

const Header: React.FC<PropsWithChildren<CardHeaderBaseProps>> = () => null;
const Content: React.FC<PropsWithChildren<{}>> = () => null;
const Footer: React.FC<PropsWithChildren<CardFooterBaseProps>> = () => null;

export const Layout = (props: CardBasePropsType) => {
    const {
        className,
        bodyClassName,
        analyticsEvents,
        contentClassName,
        children,
        url,
        target,
        border = 'shadow',
        urlTitle,
        qa,
        extraProps = {},
    } = props;

    const handleAnalytics = useAnalytics(DefaultEventNames.CardBase, url);

    const qaAttributes = useMemo(
        () => getQaAttrubutes(qa, 'header', 'footer', 'body', 'content'),
        [qa],
    );

    const {header, content, footer, image, imageMods, imageExtraProps, headerClass, footerClass} =
        useMemo(() => {
            let _header,
                _content,
                _footer,
                _image,
                _imageMods,
                _imageExtraProps,
                _headerClass,
                _footerClass;

            function handleChild(child: ReactElement) {
                switch (child.type) {
                    case Header:
                        _header = child.props.children;
                        _image = child.props.image;
                        _imageMods = child.props.imageMods;
                        _imageExtraProps = child.props.imageExtraProps;
                        _headerClass = child.props.className;
                        break;
                    case Content:
                        _content = child.props.children;
                        break;
                    case Footer:
                        _footer = child.props.children;
                        _footerClass = child.props.className;
                        break;
                }
            }

            Children.toArray(children).forEach((child) => {
                if (isValidElement(child)) {
                    handleChild(child);
                }
            });

            return {
                header: _header,
                content: _content,
                footer: _footer,
                image: _image,
                imageMods: _imageMods,
                imageExtraProps: _imageExtraProps,
                headerClass: _headerClass,
                footerClass: _footerClass,
            };
        }, [children]);

    const cardContent = useMemo(
        () => (
            <Fragment>
                {(header || image) && (
                    <BackgroundImage
                        className={b('header', headerClass)}
                        {...getMediaImage(image || '')}
                        imageMods={imageMods}
                        extraProps={imageExtraProps}
                        qa={qaAttributes.header}
                    >
                        <div className={b('header-content')}>{header}</div>
                    </BackgroundImage>
                )}
                <div className={b('body', bodyClassName)} data-qa={qaAttributes.body}>
                    <div className={b('content', contentClassName)} data-qa={qaAttributes.content}>
                        {content}
                    </div>
                    {footer && (
                        <div className={b('footer', footerClass)} data-qa={qaAttributes.footer}>
                            {footer}
                        </div>
                    )}
                </div>
            </Fragment>
        ),
        [
            header,
            image,
            headerClass,
            imageMods,
            imageExtraProps,
            qaAttributes.header,
            qaAttributes.body,
            qaAttributes.content,
            qaAttributes.footer,
            bodyClassName,
            contentClassName,
            content,
            footer,
            footerClass,
        ],
    );

    const fullClassName = useMemo(() => b({border}, className), [border, className]);

    const onClick = useCallback(() => {
        handleAnalytics(analyticsEvents);
    }, [handleAnalytics, analyticsEvents]);

    return url ? (
        <RouterLink href={url}>
            <Link
                href={url}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                className={fullClassName}
                onClick={onClick}
                title={urlTitle}
                extraProps={{
                    draggable: false,
                    onDragStart: (e: React.DragEvent<HTMLAnchorElement>) => e.preventDefault(),
                    ...extraProps,
                }}
                qa={qa}
            >
                {cardContent}
            </Link>
        </RouterLink>
    ) : (
        <div className={fullClassName} data-qa={qa} {...extraProps}>
            {cardContent}
        </div>
    );
};

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;

export default Layout;
