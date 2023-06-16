import { createClient, groq } from 'next-sanity';

export async function getProjects() {
  const client = createClient({
    projectId: 'oo2wh185',
    dataset: 'production',
  });

  return client.fetch(
    groq`*[_type=="landingPage"]{
        _id,
        createdAt,
        name,
        slug,
        "image": image.asset->url,
        url,
        content,
        fields
    }`,
  );
}
