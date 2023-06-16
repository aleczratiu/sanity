export default {
  name: 'theme',
  title: 'Theme',
  type: 'document',
  fields: [
    {
      name: 'theme',
      type: 'string',
      options: {
        list: [
          {
            title: 'White',
            value: 'white',
          },
          {
            title: 'Theme 1(Green)',
            value: 'theme1',
          },
          {
            title: 'Theme 2(Blueberry)',
            value: 'theme2',
          },
          {
            title: 'Dark',
            value: '#000',
          },
        ],
      },
    },
    {
      type: 'string',
      title: 'Accent colors',
      name: 'accentColors',
    },
    {
      name: 'padding',
      type: 'string',
      title: 'Padding',
      options: {
        list: [
          {
            title: '96px',
            value: '96',
          },
          {
            title: '72px',
            value: '72',
          },
          {
            title: '56px',
            value: '56',
          },
          {
            title: '42px',
            value: '42',
          },
        ],
      },
    },
  ],
};
