import React, {useEffect, useMemo, useRef} from 'react';

import {ChevronDown, ChevronUp, Copy as CopyIcon, TrashBin} from '@gravity-ui/icons';
import {useActionHandlers} from '@gravity-ui/uikit';

import {block} from '../../../utils';
import {EditBlockProps} from '../../types';

import './EditBlock.scss';

const b = block('edit-block');

export enum EditBlockControls {
    Up = 'up',
    Down = 'down',
    Copy = 'copy',
    Delete = 'delete',
}

const actionsOrder = [
    EditBlockControls.Up,
    EditBlockControls.Down,
    EditBlockControls.Copy,
    EditBlockControls.Delete,
];

const editBlockControlsIcons = {
    [EditBlockControls.Up]: ChevronUp,
    [EditBlockControls.Down]: ChevronDown,
    [EditBlockControls.Copy]: CopyIcon,
    [EditBlockControls.Delete]: TrashBin,
};

export type EditBlockActions = {
    [key in EditBlockControls]?: () => void;
};

const EditBlock = ({
    actions,
    isActive,
    onSelect,
    isHeader,
    children,
    resetPaddings,
}: EditBlockProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const stopPropagationProps = useMemo(
        () => ({onClick: (e: React.MouseEvent) => e.stopPropagation()}),
        [],
    );

    const {onKeyDown} = useActionHandlers(onSelect);

    useEffect(() => {
        if (isActive && ref.current) {
            //TODO: add behavior 'smooth' after addiiton of dynamic form layout open/close managing support
            ref.current.scrollIntoView({block: 'center'});
        }
    }, [isActive]);

    return (
        <div
            className={b({active: isActive})}
            onClick={onSelect}
            onKeyDown={onKeyDown}
            ref={ref}
            role="button"
            aria-current={isActive}
            tabIndex={0}
        >
            <div
                className={b('controls', {
                    active: isActive,
                    isHeader,
                    'reset-paddings': resetPaddings,
                })}
            >
                {isActive && (
                    <div className={b('controls-content')} {...stopPropagationProps}>
                        {actionsOrder.map((action) => {
                            const Icon = editBlockControlsIcons[action];

                            return actions[action] ? (
                                <button
                                    key={action}
                                    className={b('control')}
                                    onClick={actions[action]}
                                >
                                    <Icon />
                                </button>
                            ) : null;
                        })}
                    </div>
                )}
            </div>
            {children}
        </div>
    );
};

export default React.memo(EditBlock);
