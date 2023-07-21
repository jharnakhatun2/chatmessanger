import Link from 'next/link';
import RadixSelect from './radix-select';

export default function Searchbar() {
  return (
    <div className='bg-white p-3 grid grid-cols-1 lg:grid-cols-3 gap-3 rounded-2xl lg:w-[130%] relative items-center'>
      <div>
        <RadixSelect options={jobSelect} />
      </div>
      <div>
        <RadixSelect options={serviceSelect} />
      </div>
      <Link href='/listings'>
        <div className='w-full px-24 py-3 text-center bg-secondary rounded-xl'>
          Sök
        </div>
      </Link>
    </div>
  );
}
export const jobSelect = ['one', 'two', 'three', 'four'];
export const serviceSelect = ['five', 'six', 'seven', 'eight'];

{
  /* <div className="gap-3 w-[130%] p-2 my-5 bg-white rounded relative z-10 lg:flex">
  <RadixSelect />
  <RadixSelect />
  <button className="px-20 rounded bg-secondary">Sök</button>
</div>; */
}
