import { getThemeColor } from '@/sanity/utils/getThemeColor';
import { urlFor } from '@/sanity/utils/urlFor';

export default function TextWithIllustrationSection({ el, id }: { el: any; id: number }) {
  const { orientation, image, excerpt, heading, theme: { theme, padding } = { theme: 'white', padding: '0' } } = el;
  const imageUrl = urlFor(image?.asset?._ref)?.toString() || '';

  return (
    <section
      style={{
        backgroundColor: getThemeColor(theme),
        padding,
      }}
      className='flex justify-center mb-12'
      key={id}>
      <div className='flex flex-row max-w-screen-lg items-center' style={{ direction: orientation }}>
        <div style={{ color: theme === 'white' ? '#000' : '#fff' }}>
          <h1 className='mb-8'>{heading}</h1>
          <p>{excerpt}</p>
        </div>
        {imageUrl && <img src={imageUrl} alt='hero image' />}
      </div>
    </section>
  );
}
