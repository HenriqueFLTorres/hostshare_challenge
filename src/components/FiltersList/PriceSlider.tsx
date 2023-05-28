import { PropertyFilterAtom } from '@/atoms/PropertyFilter';
import * as Slider from '@radix-ui/react-slider';
import { useAtom } from 'jotai';

export default function PriceSlider() {
  const [{ type, priceRange }, setFilter] = useAtom(PropertyFilterAtom);

  return (
    <Slider.Root
      className='relative flex w-full mb-8 items-center select-none touch-none h-5'
      defaultValue={[10, 550]}
      max={550}
      value={priceRange}
      onValueChange={(prices) =>
        setFilter((prev) => ({ ...prev, priceRange: prices }))
      }
      minStepsBetweenThumbs={1}
      min={10}
      step={1}
    >
      <Slider.Track className='bg-neutral-300 relative grow rounded-full h-[2px]'>
        <Slider.Range className='absolute bg-black rounded-full h-full' />
      </Slider.Track>
      <Slider.Thumb
        className='w-8 h-8 rounded-full border border-secondary shadow-xl bg-white block'
        aria-label='Min price'
      />
      <Slider.Thumb
        className='w-8 h-8 rounded-full border border-secondary shadow-xl bg-white block'
        aria-label='Max price'
      />
    </Slider.Root>
  );
}
