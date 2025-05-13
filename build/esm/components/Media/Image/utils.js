export function getMediaImage(image) {
    return typeof image === 'string' ? { src: image } : image;
}
