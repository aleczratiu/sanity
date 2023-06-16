import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import hero from './sanity/schemas/hero';
import textWithIllustration from './sanity/schemas/textWithIllustration';
import callToAction from './sanity/schemas/callToAction';
import gallery from './sanity/schemas/gallery';
import form from './sanity/schemas/form';
import video from './sanity/schemas/video';
import testimonial from './sanity/schemas/testimonial';

export default defineConfig({
  name: 'default',
  title: 'creatopy',
  basePath: '/studio',

  projectId: 'oo2wh185',
  dataset: 'production',

  plugins: [deskTool()],

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
});
