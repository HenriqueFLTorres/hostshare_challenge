import Switch from '@/components/shared/inputs/Switch';
import Close from '@/icons/Close';
import Filter from '@/icons/Filter';
import * as Dialog from '@radix-ui/react-dialog';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import Image from 'next/image';
import FilterModalAmenities from './Amenities';
import FilterModalPriceRanges from './PriceRanges';
import FilterModalTypeSelector from './TypeSelector';

export default function FilterModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className='gap-2 hidden p-4 grow rounded-xl border border-secondary md:flex items-center text-neutral-800 text-xs font-semibold'>
          <Filter className='fill-neutral-800 w-3 h-3' />
          Filters
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black/60 fixed z-10 inset-0' />
        <Dialog.Content className='fixed flex flex-col z-10 h-[calc(100vh-5rem)] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-[48rem] bg-white focus:outline-none rounded-xl shadow-xl'>
          <Dialog.Title className='text-neutral-800 text-base font-bold  border-b border-secondary p-6 flex justify-center items-center'>
            <Dialog.Close className='hover:bg-neutral-100 absolute left-4 rounded-full p-2 transition-colors'>
              <Close className='w-4 h-4 fill-neutral-800' />
            </Dialog.Close>
            Filters
          </Dialog.Title>
          <div className='flex flex-col flex-1 overflow-auto'>
            <FilterModalTypeSelector />

            <hr className='border-secondary mx-6' />

            <FilterModalPriceRanges />

            <hr className='border-secondary mx-6' />

            <section className='flex flex-col py-8 px-6 gap-5'>
              <h3 className='text-xl text-neutral-800 mb-2 font-semibold'>
                Price range
              </h3>

              <RangeInput label='Bedrooms' />

              <RangeInput label='Beds' />

              <RangeInput label='Bathrooms' />
            </section>

            <hr className='border-secondary mx-6' />

            <section className='flex flex-col py-8 px-6 gap-5'>
              <h3 className='text-xl text-neutral-800 mb-2 font-semibold'>
                Property type
              </h3>

              <div className='flex flex-col lg:grid grid-cols-4 gap-4'>
                {propertyTypeList.map((type) => (
                  <button
                    key={type}
                    className='border capitalize text-left gap-6 flex flex-col text-base font-semibold text-neutral-800 rounded-lg border-secondary p-4 hover:border-neutral-800 transition-colors'
                  >
                    <Image
                      src={`/icons/${type}.jpg`}
                      alt=''
                      width={32}
                      height={32}
                    />

                    {type}
                  </button>
                ))}
              </div>
            </section>

            <hr className='border-secondary mx-6' />

            <FilterModalAmenities />

            <hr className='border-secondary mx-6' />

            <section className='flex flex-col py-8 px-6'>
              <h3 className='text-xl text-neutral-800 mb-6 font-semibold'>
                Booking options
              </h3>

              <div className='flex flex-col'>
                <div className='py-3 flex gap-2 justify-between items-center pr-1'>
                  <div className='flex flex-col font-normal text-left gap-1'>
                    <h4 className='text-base text-neutral-800'>Instant Book</h4>
                    <p className='text-sm text-neutral-500'>
                      Listings you can book without waiting for Host approval
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className='py-3 flex gap-2 justify-between items-center pr-1'>
                  <div className='flex flex-col font-normal text-left gap-1'>
                    <h4 className='text-base text-neutral-800'>
                      Self check-in
                    </h4>
                    <p className='text-sm text-neutral-500'>
                      Easy access to the property once you arrive
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
            </section>
          </div>
          <footer className='flex border-t border-secondary shrink-0 items-center justify-between px-6 py-4'>
            <button className='underline text-neutral-800 text-base font-semibold p-2.5 hover:bg-neutral-200 rounded-lg transition-colors'>
              Clear all
            </button>

            <button className='bg-neutral-800 hover:bg-black transition-colors font-semibold text-sm rounded-lg px-6 py-4 text-white'>
              Show places
            </button>
          </footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function RangeInput({ label }: { label: string }) {
  return (
    <div className='flex flex-col gap-6'>
      <p className='text-base text-neutral-800'>{label}</p>

      <ToggleGroup.Root
        className='inline-flex gap-2.5 overflow-hidden'
        type='single'
        defaultValue={'0'}
        aria-label={label}
      >
        {rangeValues.map((val, index) => (
          <ToggleGroup.Item
            key={index}
            value={String(val)}
            aria-label={val ? String(val) : 'any'}
            className='border rounded-full first:min-w-[5rem] min-w-[4rem] px-4 py-2.5 text-sm font-normal text-neutral-800 hover:border-neutral-800 transition-colors data-[state=on]:bg-black data-[state=on]:text-white data-[state=on]:border-neutral-800'
          >
            {val ? val : 'Any'}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
    </div>
  );
}

const propertyTypeList = ['house', 'apartment', 'guesthouse', 'hotel'];

const rangeValues = [0, 1, 2, 3, 4, 5, 6, 7, 8];
