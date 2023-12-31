import imageUrlBuilder from '@sanity/image-url';
import client from './sanity';

const builder = imageUrlBuilder(client);

export function imageUrl(source) {
    return builder.image(source);
}
