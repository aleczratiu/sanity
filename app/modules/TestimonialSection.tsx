export default function TestimonialSection({ el, id }: { el: any; id: number }) {
  const { name, quote } = el;

  return (
    <section key={id} className='mb-12'>
      <div className='flex justify-center'>
        <div className='flex max-w-screen-lg justify-center'>
          <div className='flex flex-col justify-center'>
            <div className='text-4xl mb-12'>{name}</div>
            <div className='text-lg mb-12'>{quote}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
