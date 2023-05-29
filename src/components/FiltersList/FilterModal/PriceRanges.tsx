import { PropertyFilterAtom } from '@/atoms/PropertyFilter';
import { cn } from '@/utils/classNames';
import { faker } from '@faker-js/faker';
import { useAtom } from 'jotai';
import PriceSlider from '../PriceSlider';

const fakeSliderValues = faker.helpers.arrayElements(
  Array.from(Array(55).keys()),
  55
);

export default function FilterModalPriceRanges() {
  const [{ priceRange }, setFilter] = useAtom(PropertyFilterAtom);

  const handleInputChange = (val: number, type: 'min' | 'max') => {
    setFilter((prev) => {
      const priceRange = prev.priceRange;
      priceRange[type === 'min' ? 0 : 1] = val;
      return { ...prev, priceRange };
    });
  };
  
  return (
    <section className='flex flex-col py-8 px-6'>
      <h3 className='text-xl text-neutral-800 font-semibold'>Price range</h3>

      <div className='flex flex-col lg:px-6'>
        <div className='flex items-end justify-end translate-y-2.5 gap-1'>
          {fakeSliderValues.map((v, i) => (
            <div
              key={v}
              className={cn('w-2.5 rounded-t-sm bg-neutral-300', {
                ['bg-black']:
                  (i + 1) * 10 >= priceRange[0] &&
                  (i + 1) * 10 <= priceRange[1],
              })}
              style={{ height: v }}
            />
          ))}
        </div>

        <PriceSlider />

        <div className='flex gap-6 items-center'>
          <Input
            label='Minimun'
            value={priceRange[0]}
            onChange={(val) => handleInputChange(val, 'min')}
          />
          <div className='w-4 h-[1px] bg-secondary' />
          <Input
            label='Maximun'
            value={priceRange[1]}
            onChange={(val) => handleInputChange(val, 'max')}
          />
        </div>
      </div>
    </section>
  );
}

function Input({
  label,
  onChange,
  value,
  ...props
}: { label: string; value: number; onChange: (val: number) => void } & Omit<
  React.HTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
>) {
  return (
    <label className='relative w-full flex flex-col border border-neutral-400 rounded-lg'>
      <span className='absolute top-2 left-2 text-xs font-normal text-neutral-400'>
        {label}
      </span>
      <span className='absolute bottom-2 left-2 text-neutral-800 text-base font-medium'>
        $
      </span>
      <input
        className='text-neutral-800 w-full pl-6 pr-2 pt-6 appearance-none pb-2 bg-transparent rounded-lg text-base font-medium'
        {...props}
        type='number'
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </label>
  );
}
