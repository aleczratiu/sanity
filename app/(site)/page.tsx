import Link from 'next/link';
import { sanityClient } from '@/sanity/utils/sanityClient';

export default async function Home() {
  const pages = await sanityClient.fetch(`*[_type=="landingPage"] { "slug": slug.current, title }`);

  return (
    <div>
      Available landing pages:
      <ul>
        {pages.map((page, index) => (
          <li key={index}>
            <Link href={page.slug}>{page.title}</Link>
          </li>
        ))}
        <li>
          <Link href='/studio'>Studio</Link>
        </li>
      </ul>
    </div>
  );
}
