import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import hero from './sanity/schemas/hero';
import textWithIllustration from './sanity/schemas/textWithIllustration';
import callToAction from './sanity/schemas/callToAction';
import gallery from './sanity/schemas/gallery';
import form from './sanity/schemas/form';
import video from './sanity/schemas/video';
import testimonial from './sanity/schemas/testimonial';
import { defaultDocumentNode } from './sanity/defaultDocumentNode';

export default defineConfig({
  name: 'default',
  title: 'creatopy',
  basePath: '/studio',

  projectId: 'oo2wh185',
  dataset: 'production',

  plugins: [deskTool({ defaultDocumentNode })],

  schema: {
    types: [
      {
        name: 'landingPage',
        title: 'Landing Pages',
        type: 'document',
        fields: [
          {
            name: 'title',
            type: 'string',
            title: 'Title',
          },
          {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
              source: 'title',
            },
          },
          {
            name: 'pageBuilder',
            type: 'array',
            title: 'Page builder',
            of: [
              { type: 'hero' },
              { type: 'textWithIllustration' },
              { type: 'callToAction' },
              { type: 'gallery' },
              { type: 'form' },
              { type: 'video' },
              { type: 'testimonial' },
            ],
          },
        ],
      },
      hero,
      textWithIllustration,
      callToAction,
      gallery,
      form,
      video,
      testimonial,
    ],
  },
  document: {
    // prev is the result from previous plugins and thus can be composed
    productionUrl: async (prev, context) => {
      // context includes the client and other details
      const { getClient, dataset, document } = context;
      const client = getClient({ apiVersion: '2023-05-31' });

      if (document._type === 'post') {
        const slug = await client.fetch(`*[_type == 'routeInfo' && post._ref == $postId][0].slug.current`, {
          postId: document._id,
        });

        const params = new URLSearchParams();
        params.set('preview', 'true');
        params.set('dataset', dataset);

        return `https://https://sanity-chi-six.vercel.app/${slug}?${params}`;
      }

      return prev;
    },
  },
});
