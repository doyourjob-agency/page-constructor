export type BlockBackgroundType =
    | {
          color?: string;
          image?: string;
          size?: string;
          repeat?: string;
          position?: string;
          attachment?: string;
          clip?: string;
          origin?: string;
          blendMode?: string;
      }
    | string
    | undefined;

export function normalizeBackgroundValue(str?: string): string | undefined {
    if (!str) return undefined;
    return /^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(str) ? `url(${str})` : str;
}

export function getBlockBackgroundStyles(
    blockBackground?: BlockBackgroundType,
): React.CSSProperties | undefined {
    const isStringBackground = typeof blockBackground === 'string';
    const isObjectBackground = typeof blockBackground === 'object' && blockBackground !== null;

    if (isStringBackground) {
        return {
            background: normalizeBackgroundValue(blockBackground),
        };
    }

    if (isObjectBackground) {
        return {
            backgroundColor: blockBackground.color,
            backgroundImage: normalizeBackgroundValue(blockBackground.image),
            backgroundSize: blockBackground.size,
            backgroundRepeat: blockBackground.repeat,
            backgroundPosition: blockBackground.position,
            backgroundAttachment: blockBackground.attachment,
            backgroundClip: blockBackground.clip,
            backgroundOrigin: blockBackground.origin,
            backgroundBlendMode: blockBackground.blendMode,
        };
    }

    return undefined;
}
