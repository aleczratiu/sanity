export default {
  name: 'testimonial',
  type: 'object',
  title: 'Testimonial',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'The name of the person that gives the testimonial',
    },
    {
      name: 'quote',
      type: 'text',
      title: 'Quote',
    },
  ],
};
