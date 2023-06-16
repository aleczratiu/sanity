import theme from './theme';
import video from './video';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'hero',
  type: 'object',
  title: 'Hero',
  fields: [
    theme,
    {
      name: 'heading',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'unicase',
      type: 'string',
      title: 'Unicase text',
    },
    {
      name: 'primary_button',
      type: 'object',
      title: 'Primary Button',
      fields: [
        {
          name: 'text',
          type: 'string',
          title: 'Button Text',
        },
        {
          name: 'link',
          type: 'url',
          title: 'Button Link',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https', 'mailto', 'tel'],
            }),
        },
      ],
    },
    {
      name: 'secondary_button',
      type: 'object',
      title: 'Secondary Button',
      fields: [
        {
          name: 'text',
          type: 'string',
          title: 'Button Text',
        },
        {
          name: 'link',
          type: 'url',
          title: 'Button Link',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https', 'mailto', 'tel'],
            }),
        },
      ],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    },
    video,
    {
      name: 'accent_color',
      type: 'boolean',
      title: 'Button match accent color',
    },
    {
      name: 'use_breadcrumb',
      type: 'boolean',
      title: 'Use unicase breadcrumbs',
    },
  ],
};
