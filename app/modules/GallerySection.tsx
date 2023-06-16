import { urlFor } from '@/sanity/utils/urlFor';

export default function GallerySection({ el, id }: { el: any; id: number }) {
  return (
    <section className='flex justify-center mb-12' key={id}>
      <div className='grid grid-cols-3  gap-5'>
        {el.images.map((img) => (
          <img width={250} height={250} src={urlFor(img?.asset?._ref).toString()} alt={img.alt} />
        ))}
      </div>
    </section>
  );
}
