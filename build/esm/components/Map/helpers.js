export function getMapHeight(width, isMobile) {
    return isMobile ? (width / 4) * 3 : (width / 16) * 9;
}
