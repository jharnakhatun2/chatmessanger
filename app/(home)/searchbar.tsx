import RadixSelect from './radix-select';

export default function Searchbar() {
  return (
    <div className='gap-3 w-[130%] p-2 my-5 bg-white rounded relative z-10 lg:flex'>
      <RadixSelect />
      <RadixSelect />
      <button className='px-20 rounded bg-secondary'>Sök</button>
    </div>
  );
}
export const jobSelect = ['one', 'two', 'three', 'four'];
export const serviceSelect = ['five', 'six', 'seven', 'eight'];
