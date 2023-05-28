import { PropertyFilterAtom } from '@/atoms/PropertyFilter';
import PropertyType from '@/icons/PropertyType';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { useAtom } from 'jotai';

export default function FilterModalTypeSelector() {
  const [{ type }, setFilter] = useAtom(PropertyFilterAtom);

  return (
    <div className='grid grid-cols-2 items-center'>
      <div className='flex flex-col p-6 pr-0'>
        <h3 className='text-xl text-neutral-800 font-semibold'>
          Type of place
        </h3>
        <ToggleGroup.Root
          className='inline-flex mt-6 mb-4'
          type='single'
          defaultValue='all'
          value={type}
          onValueChange={(type) => setFilter((prev) => ({ ...prev, type }))}
          aria-label='Type of place'
        >
          {propertyTypes.map(({ avg, label, type }) => (
            <ToggleGroup.Item
              key={type}
              value={type}
              aria-label={label}
              className='first:rounded-l-xl group flex flex-col text-center justify-center items-center last:rounded-r-xl px-2 py-4 min-w-[7rem] border border-secondary hover:border-neutral-800 data-[state=on]:border-neutral-800 data-[state=on]:bg-neutral-800 data-[state=on]:shadow-[inset_0_2px_8px_#000] data-[state=on]:bg-[linear-gradient(to_bottom,rgba(255_255_255/0.16),rgba(255_255_255/0))]'
            >
              <span className='group-data-[state=on]:text-white text-sm font-medium text-neutral-800'>
                {label}
              </span>
              <span className='text-neutral-500 group-data-[state=on]:text-neutral-300 text-sm font-normal'>
                ${avg} avg.
              </span>
            </ToggleGroup.Item>
          ))}
        </ToggleGroup.Root>

        <p className='text-sm font-normal text-neutral-800'>
          {descriptionByType[type as keyof typeof descriptionByType]}
        </p>
      </div>
      <div className='w-full h-80 relative'>
        <PropertyType />
      </div>
    </div>
  );
}

const propertyTypes = [
  {
    avg: 278,
    type: 'all',
    label: 'All types',
  },
  {
    avg: 122,
    type: 'rooms',
    label: 'Rooms',
  },
  {
    avg: 276,
    type: 'homes',
    label: 'Homes',
  },
];

const descriptionByType = {
  all: "Browse rooms, homes and more. Average nightly prices don't include fees or taxes.",
  rooms:
    "Your own room in a home, plus access to shared spaces. Average nightly prices don't include fees or taxes.",
  homes:
    "A home all to yourself. Average nightly prices don't include fees or taxes.",
};
