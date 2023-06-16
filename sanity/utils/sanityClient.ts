import { createClient } from 'next-sanity';

const config = {
  projectId: 'oo2wh185',
  dataset: 'production',
  useCdn: true,
};

export const sanityClient = createClient(config);
