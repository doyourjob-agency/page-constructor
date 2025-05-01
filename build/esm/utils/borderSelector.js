// This is a crutch
// The crutch is created in order to help us to work with sites, which use
// "disableShadow" flag in their content.
// We have deprecated the flag.
// We have to remove it after deleting of "disableShadow" and migration of projects content
export const getMediaBorder = ({ border, disableShadow }) => {
    if (border) {
        return border;
    }
    if (disableShadow) {
        return 'none';
    }
    return 'shadow';
};
