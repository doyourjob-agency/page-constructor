import React, {LegacyRef, useMemo} from 'react';

import {Icon, SelectProps, useUniqId} from '@gravity-ui/uikit';

import {FeedHeaderOption} from '../../../context/feedHeaderContext';
import {CloseIcon} from '../../../icons/CloseIcon';
import {DropdownArrowIcon} from '../../../icons/DropdownArrowIcon';
import {block} from '../../../utils';

import './Switcher.scss';

const b = block('feed-header-switcher');

type RenderControlParameters = Partial<Parameters<Required<SelectProps>['renderControl']>[0]>;

export type SwitcherProps = {
    initial: (string | number | null)[];
    defaultLabel: string;
    list: FeedHeaderOption[];
    controlRef: RenderControlParameters['ref'];
} & Omit<RenderControlParameters, 'ref'>;

const ICON_SIZE = 12;
const CLEAR_ICON_SIZE = 11;

export const Switcher = ({
    initial,
    defaultLabel,
    list,
    onClick,
    controlRef,
    onKeyDown,
    open,
    renderClear,
    popupId,
    activeIndex,
}: SwitcherProps) => {
    const itemsNames = useMemo(() => {
        const items = list
            .filter((item) => initial.includes(item.value))
            .map((item) => item.content);

        return items.length ? items : [defaultLabel];
    }, [defaultLabel, initial, list]);
    const hasCounter = itemsNames.length > 1;

    const contentElementId = useUniqId();

    return (
        <div className={b()} ref={controlRef as LegacyRef<HTMLDivElement>}>
            {/* eslint-disable-next-line jsx-a11y/role-supports-aria-props */}
            <button
                onClick={onClick}
                className={b('element', {overlay: true})}
                onKeyDown={onKeyDown}
                aria-expanded={open}
                aria-labelledby={contentElementId}
                aria-activedescendant={
                    activeIndex === undefined ? undefined : `${popupId}-item-${activeIndex}`
                }
            />
            <div id={contentElementId} className={b('element', {content: true})} aria-hidden>
                {itemsNames?.join(', ')}
            </div>
            {renderClear &&
                renderClear({
                    renderIcon: () => (
                        <Icon data={CloseIcon} size={CLEAR_ICON_SIZE} className={b('clear')} />
                    ),
                })}
            {hasCounter && <div className={b('element', {counter: true})}>{itemsNames.length}</div>}
            <div className={b('element', {arrow: true})}>
                <Icon data={DropdownArrowIcon} size={ICON_SIZE} className={b('arrow')} />
            </div>
        </div>
    );
};

export default Switcher;
