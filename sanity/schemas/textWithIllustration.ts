import theme from './theme';

export default {
  name: 'textWithIllustration',
  type: 'object',
  title: 'Text with Illustration',
  fields: [
    theme,
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'tagline',
      type: 'string',
      title: 'Tagline',
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
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
    {
      name: 'orientation',
      type: 'string',
      title: 'Orientation',
      options: {
        list: [
          {
            title: 'Left-to-Right',
            value: 'ltr',
          },
          {
            title: 'Right-to-Left',
            value: 'rtl',
          },
        ],
      },
    },
  ],
};
