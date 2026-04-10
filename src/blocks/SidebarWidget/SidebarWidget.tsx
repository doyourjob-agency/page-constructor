import React, {useMemo} from 'react';

import {Link} from '@gravity-ui/uikit';

import {Image, RouterLink} from '../../components';
import {SidebarWidgetBlockProps} from '../../models';
import {block} from '../../utils';

import './SidebarWidget.scss';

const b = block('sidebar-widget-block');

const SidebarWidget = ({image, title, text, url, blank}: SidebarWidgetBlockProps) => {
    const content = useMemo(
        () => (
            <React.Fragment>
                {image && <Image src={image} className={b('image')} />}
                <div>
                    <div className={`${b('title')} title-font-family`}>{title}</div>
                    <div className={b('text')}>
                        {text}
                        {url ? <span>↗</span> : null}
                    </div>
                </div>
            </React.Fragment>
        ),
        [image, text, title, url],
    );
    const extraProps = useMemo(
        () => ({
            draggable: false,
            onDragStart: (e: React.DragEvent<HTMLAnchorElement>) => e.preventDefault(),
        }),
        [],
    );
    return url ? (
        <RouterLink href={url}>
            <Link
                href={url}
                target={blank ? '_blank' : undefined}
                rel={blank ? 'noopener noreferrer' : undefined}
                className={b()}
                extraProps={extraProps}
            >
                {content}
            </Link>
        </RouterLink>
    ) : (
        <div className={b()}>{content}</div>
    );
};

export default SidebarWidget;
