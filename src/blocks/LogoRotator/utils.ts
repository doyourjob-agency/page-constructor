import {LogoRotatorBlockProps} from '../../models';

export type LogoRotatorLayer = 'current' | 'from' | 'to';
export type LogoRotatorSwapAnimation = NonNullable<LogoRotatorBlockProps['swapAnimation']>;

export const DEFAULT_SWAP_ANIMATION: LogoRotatorSwapAnimation = 'fade';
export const SWAP_ANIMATION_DURATIONS: Record<LogoRotatorSwapAnimation, number> = {
    fade: 1100,
    morph: 500,
};

export const getLayerModifiers = (
    layer: LogoRotatorLayer,
    swapAnimation: LogoRotatorSwapAnimation,
) => {
    const animationModifier = layer === 'current' ? undefined : `${swapAnimation}-${layer}`;
    const modifiers: Record<string, boolean> = {[layer]: true};

    if (animationModifier) {
        modifiers[animationModifier] = true;
    }

    return modifiers;
};

export const getInitialSlots = (items: LogoRotatorBlockProps['items'], count: number) => {
    const staticIdxList = items.map((item, i) => (item.isStatic ? i : -1)).filter((i) => i !== -1);

    const rotatableIdxList = items
        .map((item, i) => (item.isStatic ? -1 : i))
        .filter((i) => i !== -1);

    const initial: number[] = [];
    let rotatablePointer = 0;

    for (let slot = 0; slot < count; slot++) {
        if (slot < staticIdxList.length) {
            initial.push(staticIdxList[slot]);
        } else {
            initial.push(rotatableIdxList[rotatablePointer++] ?? 0);
        }
    }

    return initial;
};
