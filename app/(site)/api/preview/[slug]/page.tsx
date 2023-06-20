'use client';
import GallerySection from '@/app/modules/GallerySection';
import HeroSection from '@/app/modules/HeroSection';
import TestimonialSection from '@/app/modules/TestimonialSection';
import TextWithIllustrationSection from '@/app/modules/TextWithIllustrationSection';
import { PreviewSuspense } from 'next-sanity/preview';
import { usePreview } from '@/sanity/utils/sanity.preview';

export default function Wrapper({ params }: { params: any }) {
  return (
    <PreviewSuspense fallback='Loading...'>
      <Preview params={params} />
    </PreviewSuspense>
  );
}

function Preview({ params }: { params: any }) {
  const data = usePreview(
    null,
    `*[_type=="landingPage" && slug.current == $slug][0] { "pageBuilder": pageBuilder[] { ... } }`,
    { slug: params.slug },
  );

  console.log('data', data);

  return (
    <div className='flex justify-center flex-col' style={{ backgroundColor: '#fff' }}>
      {data.pageBuilder?.map((el: any, id: number) => {
        if (el._type === 'hero') {
          return <HeroSection el={el} id={id} key={id} />;
        }
        if (el._type === 'testimonial') {
          return <TestimonialSection el={el} id={id} key={id} />;
        }
        if (el._type === 'gallery') {
          return <GallerySection el={el} id={id} key={id} />;
        }
        if (el._type === 'textWithIllustration') {
          return <TextWithIllustrationSection el={el} id={id} key={id} />;
        }
        return null;
      })}
    </div>
  );
}
