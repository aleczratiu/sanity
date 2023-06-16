import { getThemeColor } from '@/sanity/utils/getThemeColor';
import { urlFor } from '@/sanity/utils/urlFor';

export default function HeroSection({ el, id }: { el: any; id: number }) {
  const {
    heading,
    description,
    image,
    primary_button,
    secondary_button,
    unicase,
    theme: { theme, padding } = { theme: 'white', padding: '0' },
  } = el;
  const imageUrl = image?.asset?._ref || '';

  return (
    <section
      style={{
        backgroundColor: getThemeColor(theme),
        padding,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
      key={id}
      className='mb-12'>
      <div className='flex max-w-screen-lg justify-center'>
        <div>
          <div className='mb-12'>
            <div className='text-xl mb-12'>{unicase}</div>
            <h1 className='text-4xl mb-12'>{heading}</h1>
            <p className='text-lg mb-12'>{description}</p>
          </div>
          <div className='flex justify-between mb-12'>
            <button style={{ backgroundColor: '#ffffff26' }} className='py-2 px-5 rounded' rel={primary_button.link}>
              {primary_button.text}
            </button>
            <button className='py-2 px-5 rounded' style={{ backgroundColor: '#ffffff26' }} rel={secondary_button.link}>
              {secondary_button.text}
            </button>
          </div>
        </div>
        <img src={urlFor(imageUrl).toString()} alt='hero image' />
      </div>
    </section>
  );
}
