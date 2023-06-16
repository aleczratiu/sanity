import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder({
  projectId: 'oo2wh185',
  dataset: 'production',
});
export const urlFor = (source) => builder.image(source);
