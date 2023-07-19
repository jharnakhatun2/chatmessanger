import Image from 'next/image';
import Searchbar from './searchbar';

export default function Hero() {
  return (
    <div className='lg:container '>
      <div className='flex-row-reverse items-center grid-cols-2 lg:grid'>
        <div className='flex items-center justify-center w-full'>
          <Image
            className='w-full h-full'
            src='/assets/images/image 40.png'
            width={923}
            height={899}
            alt=''
          />
        </div>
        <div className='order-first w-full lg:pl-16'>
          <h1 className='text-3xl leading-none font-semibold text-[#53CCD1] dark:text-white xl:text-[4.8rem] '>
            Alla <span className='text-[#404040]'>konsultuppdrag samlade</span>{' '}
            på en sida
          </h1>
          <Searchbar />
        </div>
      </div>
    </div>
  );
}
